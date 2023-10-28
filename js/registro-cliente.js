function LoadData(){
    
    var html ="";
    for(var i = 0; i<=45; i++){
        html+=` <tr>
                <td>Jesús</td>
                <td>jesus@corhuila.edu.co</td>
                <td>Calle 56</td>
                <td><img src="../asset/library/node_modules/bootstrap-icons/icons/pencil.svg" alt=""></td>
                <td><img src="../asset/library/node_modules/bootstrap-icons/icons/trash.svg" alt=""></td>
            </tr>`;
    }
    document.getElementById('getData').innerHTML = html;
   
}