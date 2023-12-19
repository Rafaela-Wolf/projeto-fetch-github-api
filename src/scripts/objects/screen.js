const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                            <h2>${user.bio ?? 'Não possui bio cadastrada'}</h2>
                                            <p>👥 ${user.followers} Seguidores • ${user.following} Seguindo</p>
                                        </div>
                                     </div>`
        
        let repositoriesItems = '';
        user.repositories.forEach(repo => repositoriesItems +=  `<ul class="lista-individual">
                                                                    <li>
                                                                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                    </li>
                                                                    <li>
                                                                        <p>🍴 ${repo.forks_count ?? 'No forks'}</p> 
                                                                        <p>⭐ ${repo.stargazers_count ?? 'No stars'}</p> 
                                                                        <p>👀 ${repo.subscribers_count ?? 'No watchers'}</p> 
                                                                        <p>👩🏽‍💻 ${repo.language ?? 'No specific programming language'}</p>
                                                                    </li>
                                                                </ul>`)


        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul class="lista-geral">${repositoriesItems}</ul>
                                            </div>`
        }

        let eventsItems = '';
        user.events
            .forEach(event => eventsItems +=  `<li class="event-repo-name">${event.repo.name}
                                                    <p class="commit-message">- ${event.payload.commits ? event.payload.commits[0].message : "No commit message"}</p>
                                                </li>`)

        if(user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItems}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}

export { screen }