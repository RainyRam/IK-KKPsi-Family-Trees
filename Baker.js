google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Ryan Baker', f:'Ryan Baker<div style="color:red; font-style:italic">Boise</div>'},
           '', 'Alpha'],
           
           [{v:'Kerry Detro', f:'Kerry Detro<div style="color:red; font-style:italic">Sticky</div>'},
           'Ryan Baker', 'Beta'],
           
           [{v:'Rachel Wong', f:'Rachel Wong<div style="color:red; font-style:italic">Nickname</div>'},
           'Kerry Detro', 'Gamma'],
           [{v:'Mary Simpson', f:'Mary Simpson<div style="color:red; font-style:italic">Sweet N Low</div>'},
           'Ryan Baker', 'Gamma'],
           [{v:'Erik Schlechte', f:'Erik Schlechte<div style="color:red; font-style:italic">Bad Mike</div>'},
           'Ryan Baker', 'Gamma'],
           
           [{v:'Chris Pohl', f:'Chris Pohl<div style="color:red; font-style:italic">Dodo</div>'},
           'Mary Simpson', 'Delta'],
           
           [{v:'Brad Paine', f:'Brad Paine<div style="color:red; font-style:italic">Timewarp</div>'},
           'Mary Simpson', 'Eta'],
           [{v:'Pammy Walker', f:'Pammy Walker<div style="color:red; font-style:italic">Nickname</div>'},
           'Mary Simpson', 'Eta'],
           
           [{v:'Cate Mumford', f:'Cate Mumford<div style="color:red; font-style:italic">Nickname</div>'},
           'Chris Pohl', 'Iota'],
           [{v:'Nicole Frane', f:'Nicole Frane<div style="color:red; font-style:italic">Liebe Rouge</div>'},
           'Brad Paine', 'Iota'],
           [{v:'Mallory Townsend', f:'Mallory Townsend<div style="color:red; font-style:italic">Nickname</div>'},
           'Pammy Walker', 'Iota'],

          
           
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
      }
