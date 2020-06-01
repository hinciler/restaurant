export const getMenuQueries = (menu_setup) => ({
  query: `
          {getMenu(name:"${menu_setup}")
            {categories{
                id,
                name,
                color,
                foreground,
                image,
                header,
                menuId,
                isFastMenu,
                menuItems{productId,name,color,caption,foreground,image, header,quantity,categoryId,product{portions{name,id,productId,price}}}
                }
            }}
          `,
});
