# Tratando exceçõs no nosso app
Sempre que queremos e lançamos um utilizando "throw new Error", estamos lançando um erro genérico, como se fosse um erro inesperamos do sistema.
Mas Nem sempre os erros acontecem por culpa do sistema, eles podem acontecer interação.
então, o ideal é criarmos erros que condizem com o que está acontece.

O meio mais comum é criarmos uma classe para controlar isso.

