// Função para adicionar uma nova linha com os mesmos campos de input e select
function addRow() {
    const tableBody = document.getElementById('taskTableBody');

    // Cria um novo elemento <tr> (linha)
    const newRow = document.createElement('tr');



    // Adiciona células (td) à nova linha com os mesmos inputs e selects
    newRow.innerHTML = `

            <tr>
        <td><input type="text" placeholder="Nome da tarefa"></td>
        <td>
            <select name="Status" class="status">
                <option value="Null"></option>
                <option value="Not Started">Não iniciada</option>
                <option value="Ongoing">Em andamento</option>
                <option value="Final">Conclusão final</option>
                <option value="Done">Finalizado</option>
            </select>
        </td>
        <td>
            <select name="Priority" class="status">
                <option value="Priority1"></option>
                <option value="Low">Baixa</option>
                <option value="Medium">Média</option>
                <option value="High">Urgente</option>
            </select>
        </td>
        <td><input type="date" name="" id="date"></td>
        <td>
            <button type="button" onclick="deleteRow(this)" class="deletebtn">Deletar tarefa</button>
        </td>
        </tr>
    `;

    // Adiciona a nova linha ao final do tbody
    tableBody.appendChild(newRow);

    // Verifica e atualiza a mensagem
    updateEmptyMessage();
}

// Função para deletar uma linha
function deleteRow(button) {
    const row = button.closest('tr'); // Use closest para garantir que pega a linha correta (tr)
    row.parentNode.removeChild(row);

    // Verifica e atualiza a mensagem após exclusão
    updateEmptyMessage();
}

// Função para mostrar ou esconder a mensagem de 'Nenhuma tarefa na lista'
function updateEmptyMessage() {
    const tableBody = document.getElementById('taskTableBody');
    const emptyMessage = document.getElementById('NullMessage');

    if (tableBody.rows.length === 0) {
        emptyMessage.style.display = "block";  // Mostra a mensagem
    } else {
        emptyMessage.style.display = "none";  // Esconde a mensagem
    }
    

    }
