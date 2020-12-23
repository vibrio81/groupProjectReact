import React, {Component} from 'react'





class ProductList extends Component {
    render(){
        return(
            <div>
                <ul>
                    <li>
                    <div class="frame">
                    <img  alt="handmade ornaments" src="https://plaidonline.com/getattachment/Learn/LetsPaint/LetsPaintLive/Handmade-Holiday-Ornaments/POL_XMAS_bty_Ornaments_18_101719.jpg; "/>
                    </div>
                    
                    <span class="ornament1">Hand Painted Wooden Disks</span>
                    
                    </li>
                   
                    <li >
                    <div class="frame">
                    <img alt="fairyseason"  src="https://images.fairyseason.com/2020/11/06/489378_101491009_124.jpg" width="400" height="400"/>
                    </div>
                    <span class="ornament2">2020 ceramic</span>
                    
                    <div class="frame">
                    <img alt="simple ornament" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfTcpBggGgQ9Me7u1XnVbYbvbTrI8O3RZ_GaCGj1qjiXnFe0-Ejug9be8PQ&amp;usqp=CAc"width="400" height="400"/>
                    </div>
                    <span class="ornament3">Bee Kind</span>
                    </li>
                   
                    <li >
                    <div class="frame">
                    <img alt="simple ornament " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXnK5ZtVnw9dt05i6_eqf4a5He_Z-9Bsd90tW-K5ZfpxDlAwKmcNbyvHSf-0&amp;usqp=CAc"width="400" height="400"/>
                    </div>
                    <span class="ornament4">Woodland Creatures</span>
                    </li> 
                     
                    <div>
                    

                    </div>

                </ul>

            </div>
        );
    }
}
    
export default ProductList;