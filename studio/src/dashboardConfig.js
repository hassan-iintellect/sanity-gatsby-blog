export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4f6e0759a1d7ed93210cf7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6axdn56n',
                  apiId: '2ca27118-e08b-4962-b10a-6bd4102f02a9'
                },
                {
                  buildHookId: '5e4f6e08092dfbc48b67f3ec',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-th9ucp9m',
                  apiId: '2b39b511-f1cc-42dc-a121-12db187ca294'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hassan-iintellect/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-th9ucp9m.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
