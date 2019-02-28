  google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Mitch Mikuchonis', f:'Mitch Mikuchonis<div style="color:red; font-style:italic">Mr. Kent</div>'},
           '', 'Transfer'],
           [{v:'Nathaniel Patlovich', f:'Nathaniel Patlovich<div style="color:red; font-style:italic">Glade</div>'},
           '', 'Transfer'],
           
           
           [{v:'Alex Sessa', f:'Alex Sessa<div style="color:red; font-style:italic">Bubble Bowl</div>'},
           'Mitch Mikuchonis', 'Sigma'],
           
           
           [{v:'Layton Cunningham', f:'Layton Cunningham<div style="color:red; font-style:italic">Freeform Jazz</div>'},
           'Alex Sessa', 'Tau'],
           [{v:'AJ Salazar', f:'AJ Salazar<div style="color:red; font-style:italic">Firmly Grasp It</div>'},
           'Alex Sessa', 'Tau'],
           [{v:'Thomas Anderson', f:'Thomas Anderson<div style="color:red; font-style:italic">Bubble Buddy</div>'},
           'Mitch Mikuchonis', 'Tau'],
           
          
          [{v:'Rachel Hernandez', f:'Rachel Hernandez<div style="color:red; font-style:italic">Sticks</div>'},
           'AJ Salazar', 'Upsilon'],
           [{v:'Matt McMichael', f:'Matt McMichael<div style="color:red; font-style:italic">Martian Manhunter</div>'},
           'Thomas Anderson', 'Upsilon'],
           [{v:'Shiloh Bagley', f:'Shiloh Bagley<div style="color:red; font-style:italic">Organa</div>'},
           'Nathaniel Patlovich', 'Upsilon'],
           [{v:'Zach Arlit', f:'Zach Arlit<div style="color:red; font-style:italic">The Rock</div>'},
           'Nathaniel Patlovich', 'Upsilon'],
           [{v:'Simon Pintar', f:'Simon Pintar<div style="color:red; font-style:italic">No, This Is PATRICK!</div>'},
           'Mitch Mikuchonis', 'Upsilon'],
           
           
           [{v:'Juan Becerra', f:'Juan Becerra<div style="color:red; font-style:italic">Pada-Juan</div>'},
           'Shiloh Bagley', 'Phi'],
           [{v:'Brooklyn Ingle', f:'Brooklyn Ingle<div style="color:red; font-style:italic">Azurmalachite</div>'},
           'Zach Arlit', 'Phi'],
           [{v:'Gage Spicer', f:'Gage Spicer<div style="color:red; font-style:italic">Man Ray</div>'},
           'Alex Sessa', 'Phi'],
           
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
      }
