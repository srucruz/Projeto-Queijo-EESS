
const receitas = [
    {
        id: 1,
        nome: 'Risoto de Queijo',
        imagem: '../assets/img/risoto-de-queijo.jpg',
        ingredientes: ['2 xícaras (chá) de arroz', '1/4 de xícara (chá) de azeite', '1/2 xícara (chá) de cebola ralada', '3 dentes de alho', '1/2 xícara (chá) de vinho branco seco', '1 litro de caldo de carne quente', '1/2 xícara (chá) de queijo prato picado', '1/2 xícara (chá) de queijo gorgonzola picado', '1/2 xícara (chá) de mussarela picada', '1/2 xícara (chá) de queijo ralado', 'Sal e pimenta-do-reino a gosto',],
        modoPreparo: 'Aqueça o azeite e doure a cebola e o alho. Junte o arroz e refogue até começar a grudar na panela. Tempere com o sal, adicione o vinho e, sem parar de mexer, acrescente o caldo de carne em conchas. Mexa até quase todo o líquido ser absorvido, para adicionar mais caldo. O arroz deve ficar macio, porém firme, e com aspecto de empapado. Junte os queijos em pedaços e mexa até eles derreterem. Polvilhe com a pimenta e sirva!'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: '../assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: '../assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: '../assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: '../assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: '../assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: '../assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: '../assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: '../assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: '../assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: '../assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: '../assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: '../assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: '../assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: '../assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: '../assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: '../assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: '../assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: '../assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: '../assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: '../assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: '../assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: '../assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: '../assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: '../assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: '../assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: '../assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: '../assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: '../assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: '../assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: '../assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: '../assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: '../assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: '../assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    }]

function carregarGaleria() {
    const galeria = document.getElementById('galeria'); // Seleciona o elemento de galeria no DOM
    receitas.forEach(receita => { // Itera sobre cada receita no array recipes
        const itemGaleria = document.createElement('div'); // Cria um novo elemento div
        itemGaleria.classList.add('item-galeria'); // Adiciona a classe 'gallery-item' ao div
        itemGaleria.innerHTML = `
            <img src="${receita.imagem}" alt="${receita.nome}"> <!-- Adiciona a imagem da receita -->
            <h3>${receita.nome}</h3> <!-- Adiciona o nome da receita -->
        `;
        itemGaleria.addEventListener('click', () => mostrarModalReceitas(receita)); // Adiciona um ouvinte de eventos para abrir o modal ao clicar
        galeria.appendChild(itemGaleria); // Adiciona o item da galeria ao elemento de galeria
    });
}

function mostrarModalReceitas(receita) {
    const modal = document.getElementById('modal-receitas'); // Seleciona o modal no DOM
    document.getElementById('tituloReceita').textContent = receita.nome; // Define o título do modal
    document.getElementById('imagemReceita').src = receita.imagem; // Define a imagem do modal
    document.getElementById('ingredientesReceita').innerHTML = receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join(''); // Lista os ingredientes
    document.getElementById('modoPreparo').textContent = receita.modoPreparo; // Define as instruções de preparo
    modal.style.display = 'block'; // Exibe o modal
}

function fecharModalReceitas() {
    const modal = document.getElementById('modal-receitas'); // Seleciona o modal no DOM
    modal.style.display = 'none'; // Oculta o modal
}


document.addEventListener('DOMContentLoaded', () => {
    carregarGaleria(); // Carrega a galeria quando o DOM estiver completamente carregado
    const btnFechar = document.querySelector('.close'); // Seleciona o botão de fechar no modal
    btnFechar.addEventListener('click', fecharModalReceitas); // Adiciona um ouvinte de eventos para fechar o modal ao clicar no botão
    window.addEventListener('click', event => { // Adiciona um ouvinte de eventos para fechar o modal ao clicar fora do modal
        const modal = document.getElementById('modal-receitas');
        if (event.target === modal) { // Verifica se o clique foi fora do modal
            fecharModalReceitas(); // Fecha o modal
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Obtém o modal
    const modal = document.getElementById("myModal");

    // Obtém o botão que abre o modal
    const btn = document.getElementById("openModalBtn");

    // Obtém o elemento <span> que fecha o modal
    const span = document.getElementsByClassName("btnClose")[0];

    // Quando o usuário clicar no botão, abre o modal 
    btn.onclick = function () {
        modal.style.display = "flex";
    }

    // Quando o usuário clicar no <span> (x), fecha o modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});