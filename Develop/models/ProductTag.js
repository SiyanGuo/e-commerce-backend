const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
// const { Product, Category, Tag } = require('../models/index');

class ProductTag extends Model {

  // static bulkCreate(productTagArray) {
  //   let newArray = productTagArray.forEach(element => {
  //     ProductTag.create({
  //       product_id: element.product_id,
  //       tag_id: element.tag_id
  //     })
  //     console.log(newArray);
  //     return newArray;
  //   })
  //     .then((result) => {
  //       console.log('tagResult', result);
  //       return Product.findOne({
  //         where: { id: productTagArray[0].product_id },
  //         attributes: ['product_name', 'price', 'stock'],
  //         include: [
  //           {
  //             model: Category,
  //             attributes: ['category_name']
  //           },
  //           {
  //             model: Tag,
  //             through: ProductTag,
  //             attributes: ['tag_name']
  //           }
  //         ]
  //       })
  //     })
  // }
}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
