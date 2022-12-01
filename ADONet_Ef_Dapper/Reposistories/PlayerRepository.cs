using ADONet_Ef_Dapper.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;
namespace ADONet_Ef_Dapper.Reposistories
{
    public class PlayerRepository
    {
        private readonly string _connectionString;
        public IConfiguration Configuration { get; }

        public PlayerRepository(IConfiguration configuration)
        {
            Configuration = configuration;
            _connectionString = Configuration["ConnectionStrings:DefaultConnection"];
        }
        public IEnumerable<Player> Get()
        {
            var players = new List<Player>();
            DataTable dataTable = new DataTable();
            using(SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = "Select * from Player";
                SqlCommand command = new SqlCommand(sql, connection);
                SqlDataAdapter dataAdapter = new SqlDataAdapter(command);
                dataAdapter.Fill(dataTable);
            }

            for (int i = 0; i < dataTable.Rows.Count; i++)
            {
                var player = new Player()
                {
                    id = Convert.ToInt32(dataTable.Rows[i]["id"]),
                    Name = dataTable.Rows[i]["Name"].ToString(),
                    player_no = Convert.ToInt32(dataTable.Rows[i]["player_no"]),
                    AddedOn = Convert.ToDateTime(dataTable.Rows[i]["AddedOn"])
                };
                players.Add(player);
            }

            return players;
        }
        public bool Create(Player player)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = $"Insert into Player (Name, player_no) Values ('{player.Name}', " +
                             $"'{player.player_no}')";
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.CommandType = CommandType.Text;
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();
                }
                return true;
            }
        }
        public string CreateUsingStoredProcedure(Player player)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = "CreatePlayer";

                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;

                    SqlParameter parameter = new SqlParameter
                    {
                        ParameterName = "@Name",
                        Value = player.Name,
                        SqlDbType = SqlDbType.VarChar,
                        Size = 50
                    };
                    command.Parameters.Add(parameter);

                    parameter = new SqlParameter
                    {
                        ParameterName = "@player_no",
                        Value = player.player_no,
                        SqlDbType = SqlDbType.Int
                    };
                    command.Parameters.Add(parameter);
                    parameter = new SqlParameter
                    {
                        ParameterName = "@Result",
                        SqlDbType = SqlDbType.VarChar,
                        Size = 50,
                        Direction = ParameterDirection.Output
                    };
                    command.Parameters.Add(parameter);

                    connection.Open();
                    command.ExecuteNonQuery();
                    string result = command.Parameters["@Result"].Value.ToString();
                    connection.Close();
                    return result;
                }
            }
        }
        public bool Update(Player player, int id)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = $"Update Player SET Name='{player.Name}', player_no='{player.player_no}' Where Id='{id}'";
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();
                }

                return true;
            }
        }

        public bool Delete(int id)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = $"Delete From Player Where Id='{id}'";
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();
                }

                return true;
            }
        }
    }
}
