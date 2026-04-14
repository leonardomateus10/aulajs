      function calcular() {
      let valorKm = number(prompt ("digite o valor cobrado por quilometros"));
      let km = number(prompt("digite a quantidade de quilometros percorridos"));
      let minutos =number(prompt("digite a quantidade de minutos da corrida"));

      let total = (valorKm * km) + (minutos * 0.50);

      document.getElementById("resultado").innerText = "Total da corrida: R$ " + total.toFixed(2);
       
    }
