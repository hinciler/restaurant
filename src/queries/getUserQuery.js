export const getUserQueries = (pin) => ({
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
