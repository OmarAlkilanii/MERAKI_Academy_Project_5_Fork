const {pool} = require("../models/db");

//This function add product to cart
const addtoCart = (req,res)=>{
    const product_id = req.params.id;
    const user_id =  req.token.userId;

    pool.query(`INSERT INTO cart (user_id, product_id) VALUES ($1, $2);
    `,[user_id,product_id]).then((result)=>{
        res.status(201).json({
            success: true,
            message: "Product added to cart",
            result: result.rows,
        })
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: "Server error",
            err: err,
        })
    })
}

/* 
user_id INT,
product_id INT,
is_deleted SMALLINT DEFAULT 0,
*/

//Delete from cart
const deleteFromCart = (req,res)=>{
    const userId = req.token.userId;
    const productId = req.params.id;
    pool
      .query(`UPDATE cart SET is_deleted=1 WHERE id=$1 AND user_id=$2 RETURNING *`, [productId,userId])
      .then((result) => {
        res.status(200).json({
          success: true,
          message: "product deleted",
          result: result.rows,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server error",
          err: err,
        });
      });
}

//This function give the sum of prices in the cart
/* 
this function should take all the carts id's and some the prices and send it to admin 
also for new table orders 

1.select to get price data from order table 
*/

/* CREATE TABLE Orders (
    id SERIAL NOT NULL,
    user_id INT,
    product_id INT,
    price INT,
    is_deleted SMALLINT DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
); */
const checkOutFun = (req,res)=>{
    const user_id = req.token.userId;
    const products_ids = [];
    

    pool.query(``).then((result)=>{
        res.status(200).json({
            success: true,
            message: "added to orderd",
            result: result.rows,
          });
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: "Server error",
            err: err,
          });
    })
}


module.exports = {
    addtoCart,
    deleteFromCart,

}