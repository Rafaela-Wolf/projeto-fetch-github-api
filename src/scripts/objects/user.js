const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers: [],
    following: [],
    forks: [],
    stars: [],
    subscribers: [],
    langugae: '',
    events: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
        this.forks = repositories.forks_count
        this.stars = repositories.stargazers_count
        this.subscribers = repositories.subscribers_count // Segundo a nova documentação da API GitHub esse é o nome dado aos watchers
        this.language = repositories.language
    },
    setEvents(events) {
        this.events = events
    }
}

export { user }