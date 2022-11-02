import React from "react";
import Question4 from "./Question4";

import { useState } from "react";

const Disposts=()=>{

    const posts = [
        {
        userId: 1,
        id: 1,
        title:
        'sunt aut facere repellat provident occaecati excepturi optioreprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autemsunt rem eveniet architecto',
        },
        {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolorbeatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihilmolestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisinulla',
        },
        {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi autad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porroeius odio et labore et velit aut',
        },
        {
        userId: 1,
        id: 4,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autemassumenda provident rerum culpa\nquis hic commodi nesciunt rem teneturdoloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
        },
        {
        userId: 1,
        id: 5,
        title: 'nesciunt quas odio',
        body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sitautem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest auttenetur dolor neque',
        },
        {
        userId: 1,
        id: 6,
        title: 'dolorem eum magni eos aperiam quia',
        body: 'ut aspernatur corporis harum nihil quis providentsequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo abreprehenderit accusantium quas\nvoluptate dolores velit et doloremquemolestiae',
        },
        {
        userId: 1,
        id: 7,
        title: 'magnam facilis autem',
        body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim quiquis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequieos ea sed quas',
        },
        {
        userId: 1,
        id: 8,
        title: 'dolorem dolore est ipsam',
        body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animisint suscipit qui sint possimus cum\nquaerat magni maioresexcepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
        },
        {
        userId: 1,
        id: 9,
        title: 'nesciunt iure omnis dolorem tempora et accusantium',
        body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniamautem ut quam aut nobis\net est aut quod aut provident voluptas autemvoluptas',
        },
       ]

       const [userD, setUserD] = useState(posts);
       const UpdateDataSet = (Userdata) => {
         setUserD((prevData) => {
           return [...prevData, Userdata];
         });
       };
       return(
       <div>
              <Question4 saveDataHandler={UpdateDataSet} />
 Table:
        <table border="1px">
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            {userD.map((value)=>{
            return(
               
                    <tr><td>{value.userId}</td>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.body}</td>
                        </tr>        

                    )
        })}
       </table> </div>
       )
}
export default Disposts;