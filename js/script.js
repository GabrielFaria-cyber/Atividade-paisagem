const canvas=document.getElementById('canvas');
const CTX=canvas.getContext('2d');

CTX.fillStyle='#0c003b';
CTX.fillRect(0, 465, 1000, 165);

//Lua
CTX.strokeStyle='#F5F5F5';
CTX.beginPath();
CTX.arc(485, 100, 50, 0, Math.PI * 2);
CTX.fillStyle='#F8F8FF';
CTX.fill();
CTX.stroke();

//Árvore 1
CTX.strokeStyle='#0c003b';
CTX.lineWidth=3;
CTX.beginPath();
CTX.moveTo(50, 350);
CTX.lineTo(50, 465);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(50, 365, 50, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

//Árvore 2
CTX.strokeStyle='#0c003b';
CTX.beginPath();
CTX.moveTo(125, 405);
CTX.lineTo(125, 465);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(125, 365, 50, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

//Árvore 3
CTX.strokeStyle='#0c003b';
CTX.beginPath();
CTX.moveTo(950, 405);
CTX.lineTo(950, 465);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(950, 365, 50, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

