google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Bonnar Bray', f:'Bonnar Bray<div style="color:red; font-style:italic">Snuffy</div>'},
           '', 'Alpha'],
           
           [{v:'Christopher Gallagher', f:'Christopher Gallagher<div style="color:red; font-style:italic">Ditto</div>'},
           'Bonnar Bray', 'Beta'],
           
           [{v:'William Emerson', f:'William Emerson<div style="color:red; font-style:italic">Nickname</div>'},
           'Bonnar Bray', 'Delta'],
           
           [{v:'Nicolas Washington', f:'Nicolas Washington<div style="color:red; font-style:italic">Nickname</div>'},
           'William Emerson', 'Epsilon'],
           
[{v:'Clay Butler', f:'Clay Butler<div style="color:red; font-style:italic">Nickname</div>'},
           'William Emerson', 'Iota'],
          
           
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
      }
