export const getUser = (pin) => ({
  query: `
        {
          getUser(pin:${pin}){ 
            userRole {
              name
              isAdmin
              
            }
          }
        }
          `,
});
