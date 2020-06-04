export const getTableQueries = (entity_type) => ({
  query: `
        {getEntityScreenItems(name:"${entity_type}")
          {
            name
            caption
            color
            labelColor
          }}
        `,
});
