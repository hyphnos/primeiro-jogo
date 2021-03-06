export default function renderScreen(screen, game, requestAnimationFrame, currentPlayerId) {
    screen.width = game.state.screen.width
    screen.height = game.state.screen.height
    const context = screen.getContext('2d')
    context.clearRect(0, 0, game.state.screen.width, game.state.screen.height)

    for (const playerId in game.state.players) {
        const player = game.state.players[playerId]
        context.fillStyle = 'black'
        context.fillRect(player.x, player.y, 1, 1)
    }

    for (const fruitId in game.state.fruits) {
        const fruit = game.state.fruits[fruitId]
        context.fillStyle = 'green'
        context.fillRect(fruit.x, fruit.y, 1, 1)
    }

    const { [currentPlayerId]: currentPlayer } = game.state.players
    if(currentPlayer) {
        context.fillStyle = '#f0db4f'
        context.fillRect(currentPlayer.x, currentPlayer.y, 1, 1)
    }

    requestAnimationFrame(() =>
        renderScreen(screen, game, requestAnimationFrame, currentPlayerId)
    )
}