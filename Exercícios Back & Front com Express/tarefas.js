let tarefas = [];
let idTarefa = 1;


router.post('/', (req, res) => {
    const { titulo, concluida } = req.body;
    if (!titulo) return res.status(400).json({ erro: "Título é obrigatório" });

    const novaTarefa = { id: idTarefa++, titulo, concluida: concluida || false };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

router.get('/', (req, res) => res.json(tarefas));