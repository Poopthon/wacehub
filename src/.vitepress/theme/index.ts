import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import Posts from './components/blog/Posts.vue'
import Post from './components/blog/Post.vue'
import PostDetail from './components/blog/PostDetail.vue'
import PostIcon from './components/blog/PostIcon.vue'
import PostAuthor from './components/blog/PostAuthor.vue'
import AuthorDetail from './components/blog/AuthorDetail.vue'
import teammember from './components/team/teammember.vue'
import Team from './components/team/Team.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {

    app.component('Posts', Posts)
    app.component('Post', Post)
    app.component('PostDetail', PostDetail)
    app.component('PostIcon', PostIcon)
    app.component('PostAuthor', PostAuthor)
    app.component('AuthorDetail', AuthorDetail)
    app.component('teammember', teammember)
    app.component('Team', Team)
  },
}
