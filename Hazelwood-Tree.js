      google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Lindsey Hazelwood', f:'Lindsey Hazelwood<div style="color:red; font-style:italic">Milkshakes</div>'},
           '', 'Alpha'],
           
           
           [{v:'Jarod Sorum', f:'Jarod Sorum<div style="color:red; font-style:italic">Smooth</div>'},
           'Lindsey Hazelwood', 'Gamma'],
           
           
           [{v:'Nick Kovach', f:'Nick Kovach<div style="color:red; font-style:italic">Mister Efficiency</div>'},
           'Jarod Sorum', 'Delta'],
           
           
           [{v:'Meredith Hoffman', f:'Meredith Hoffman<div style="color:red; font-style:italic">Space Cadet</div>'},
           'Nick Kovach', 'Epsilon'],
           
           
           [{v:'Brittany Puglsey', f:'Brittany Puglsey<div style="color:red; font-style:italic">Nickname</div>'},
           'Jarod Sorum', 'Zeta'],
           
           
           [{v:'Aaron Messinger', f:'Aaron Messinger<div style="color:red; font-style:italic">Nickname</div>'},
           'Nick Kovach', 'Eta'],
           [{v:'Karla Walwer', f:'Karla Walwer<div style="color:red; font-style:italic">Nickname</div>'},
           'Meredith Hoffman', 'Eta'],
           
           
           [{v:'Julia Huglin', f:'Julia Huglin<div style="color:red; font-style:italic">Nickname</div>'},
           'Nick Kovach', 'Iota'],
           [{v:'Nathan Mallon', f:'Nathan Mallon<div style="color:red; font-style:italic">8455.251/Randomizer</div>'},
           'Aaron Messinger', 'Iota'],
           [{v:'Becky Thompson', f:'Becky Thompson<div style="color:red; font-style:italic">Nickname</div>'},
           'Meredith Hoffman', 'Iota'],
           
           
           [{v:'Loren Davis', f:'Loren Davis<div style="color:red; font-style:italic">Nickname</div>'},
           'Aaron Messinger', 'Lambda'],
           [{v:'Julia McCoy', f:'Julia McCoy<div style="color:red; font-style:italic">Quiete Una</div>'},
           'Becky Thompson', 'Lambda'],
           [{v:'Bess Oliver', f:'Bess Oliver<div style="color:red; font-style:italic">Coccinella</div>'},
           'Becky Thompson', 'Lambda'],
           
           
           [{v:'Leonardo Escobar', f:'Leonardo Escobar<div style="color:red; font-style:italic">Nickname</div>'},
           'Aaron Messinger', 'Mu'],
           [{v:'Daniel Wiley', f:'Daniel Wiley<div style="color:red; font-style:italic">Teddy</div>'},
           'Meredith Hoffman', 'Mu'],
           
           
           [{v:'Kennia Carpinteyro', f:'Kennia Carpinteyro<div style="color:red; font-style:italic">Aurora</div>'},
           'Julia McCoy', 'Nu'],
           
           
           [{v:'Baylee Proctor', f:'Baylee Proctor<div style="color:red; font-style:italic">Nickname</div>'},
           'Kennia Carpinteyro', 'Xi'],
           
           
           [{v:'Megan Matthew', f:'Megan Matthew<div style="color:red; font-style:italic">Nickname</div>'},
           'Kennia Carpinteyro', 'Omicron'],
           [{v:'Esteban Galan', f:'Esteban Galan<div style="color:red; font-style:italic">Captain America</div>'},
           'Daniel Wiley', 'Omicron'],
           
           
           [{v:'Chaz Davis', f:'Chaz Davis<div style="color:red; font-style:italic">Nickname</div>'},
           'Kennia Carpinteyro', 'Rho'],
           
           
           [{v:'Max Bennett', f:'Max Bennett<div style="color:red; font-style:italic">Nickname</div>'},
           'Esteban Galan', 'Sigma'],
           [{v:'Andrew Kinsey', f:'Andrew Kinsey<div style="color:red; font-style:italic">Armstrong</div>'},
           'Esteban Galan', 'Sigma'],
           [{v:'Gabrielle Touriel', f:'Gabrielle Touriel<div style="color:red; font-style:italic">Areli</div>'},
           'Kennia Carpinteyro', 'Sigma'],
           
           
           [{v:'Justin Streeter', f:'Justin Streeter<div style="color:red; font-style:italic">Teddy</div>'},
           'Andrew Kinsey', 'Tau'],
           [{v:'Bryan Rosenblatt', f:'Bryan Rosenblatt<div style="color:red; font-style:italic">Shir El</div>'},
           'Gabrielle Touriel', 'Tau'],
           
           
           [{v:'Hannah Morrison', f:'Hannah Morrison<div style="color:red; font-style:italic">Louisa</div>'},
           'Andrew Kinsey', 'Upsilon'],
           [{v:'Sophia Marrs', f:'Sophia Marrs<div style="color:red; font-style:italic">Eleanor</div>'},
           'Andrew Kinsey', 'Upsilon'],
           [{v:'Myah Russell', f:'Myah Russell<div style="color:red; font-style:italic">Adara Rena</div>'},
           'Gabrielle Touriel', 'Upsilon'],
           
           
           [{v:'Brooke Blau', f:'Brooke Blau<div style="color:red; font-style:italic">Galleta Rosa</div>'},
           'Myah Russell', 'Phi'], 
           [{v:'Naomii Joseph', f:'Naomii Joseph<div style="color:red; font-style:italic">Iris</div>'},
           'Sophia Marrs', 'Phi'], 
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
      }
