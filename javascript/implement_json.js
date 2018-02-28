window.onload = function() {
				
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						var response = JSON.parse(xmlhttp.responseText);
						var articles = response.articles;
						console.log(articles);
						
						/* Adding JSON-Content -- Header */
						document.getElementById('head_1').innerHTML = articles[0].header;
						document.getElementById('head_2').innerHTML = articles[1].header;
						document.getElementById('head_3').innerHTML = articles[2].header;
						document.getElementById('head_4').innerHTML = articles[3].header;
						document.getElementById('head_5').innerHTML = articles[4].header;
						document.getElementById('head_6').innerHTML = articles[5].header;
						document.getElementById('head_7').innerHTML = articles[6].header;
						document.getElementById('head_8').innerHTML = articles[7].header;
						document.getElementById('head_9').innerHTML = articles[8].header;
						document.getElementById('head_10').innerHTML = articles[9].header;
						document.getElementById('head_11').innerHTML = articles[10].header;
						document.getElementById('head_12').innerHTML = articles[11].header;
						document.getElementById('head_13').innerHTML = articles[12].header;
						document.getElementById('head_14').innerHTML = articles[13].header;
						document.getElementById('head_15').innerHTML = articles[14].header;
						document.getElementById('head_16').innerHTML = articles[15].header;
						document.getElementById('head_17').innerHTML = articles[16].header;
						document.getElementById('head_18').innerHTML = articles[17].header;
						document.getElementById('head_19').innerHTML = articles[18].header;
						document.getElementById('head_20').innerHTML = articles[19].header;
						
						
						/* Adding JSON-Content -- Value */
						document.getElementById('value_1').innerHTML = articles[0].value;
						document.getElementById('value_2a').innerHTML = articles[1].value1;
						document.getElementById('value_2b').innerHTML = articles[1].value2;
						document.getElementById('value_3').innerHTML = articles[2].value;
						document.getElementById('value_4').innerHTML = articles[3].value;
						document.getElementById('value_5').innerHTML = articles[4].value;
						document.getElementById('value_6a').innerHTML = articles[5].value1;
						document.getElementById('value_6b').innerHTML = articles[5].value2;
						document.getElementById('value_7').innerHTML = articles[6].value;
						document.getElementById('value_8').innerHTML = articles[7].value;
						document.getElementById('value_9').innerHTML = articles[8].value;
						document.getElementById('value_10a').innerHTML = articles[9].value1;
						document.getElementById('value_10b').innerHTML = articles[9].value2;
						document.getElementById('value_11').innerHTML = articles[10].value;
						document.getElementById('value_12a').innerHTML = articles[11].value1;
						document.getElementById('value_12b').innerHTML = articles[11].value2;
						document.getElementById('value_13a').innerHTML = articles[12].value1;
						document.getElementById('value_13b').innerHTML = articles[12].value2;
						document.getElementById('value_14').innerHTML = articles[13].value;
						document.getElementById('value_15a').innerHTML = articles[14].value1;
						document.getElementById('value_15b').innerHTML = articles[14].value2;
						document.getElementById('value_16a').innerHTML = articles[15].value1;
						document.getElementById('value_16b').innerHTML = articles[15].value2;
						document.getElementById('value_17').innerHTML = articles[16].value;
						document.getElementById('value_18').innerHTML = articles[17].value;
						document.getElementById('value_19').innerHTML = articles[18].value;
						document.getElementById('value_20a').innerHTML = articles[19].value1;
						document.getElementById('value_20b').innerHTML = articles[19].value2;
					}
				}
				xmlhttp.open('GET', '../json/articles.json', true);
				xmlhttp.send(null);
			}