google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Tim Imlay', f:'Tim Imlay<div style="color:red; font-style:italic">Maypole</div>'},
           '', 'Alpha'],
           
           [{v:'Johnathan Alexander', f:'Johnathan Alexander<div style="color:red; font-style:italic">Funk</div>'},
           'Tim Imlay', 'Beta'],
           [{v:'Sarah Dyer', f:'Sarah Dyer<div style="color:red; font-style:italic">Soul</div>'},
           'Tim Imlay', 'Beta'],
           
           [{v:'Karen Kaupp', f:'Karen Kaupp<div style="color:red; font-style:italic">Punkybrewsterus</div>'},
           'Sarah Dyer', 'Gamma'],
           
           [{v:'Nathan Trujillo', f:'Nathan Trujillo<div style="color:red; font-style:italic">Phantom Phinge</div>'},
           'Karen Kaupp', 'Delta'],
           
           [{v:'Hannah Sutcliffe', f:'Hannah Sutcliffe<div style="color:red; font-style:italic">Nickname</div>'},
           'Karen Kaupp', 'Theta'],
           
           [{v:'Travis Dyer', f:'Travis Dyer<div style="color:red; font-style:italic">Nickname</div>'},
           'Karen Kaupp', 'Iota'],
           [{v:'Steven Blake', f:'Steven Blake<div style="color:red; font-style:italic">Paragon</div>'},
           'Hannah Sutcliffe', 'Iota'],
           [{v:'Carlotta Vaughn', f:'Carlotta Vaughn<div style="color:red; font-style:italic">Nickname</div>'},
           'Karen Kaupp', 'Iota'],
           
           [{v:'Keegan Sablin', f:'Keegan Sablin<div style="color:red; font-style:italic">Nickname</div>'},
           'Steven Blake', 'Lambda'],
           [{v:'Alexander Lundquist', f:'Alexander Lundquist<div style="color:red; font-style:italic">Paterna Familia</div>'},
           'Karen Kaupp', 'Lambda'],
           
           [{v:'Robert Gras', f:'Robert Gras<div style="color:red; font-style:italic">Nickname</div>'},
           'Karen Kaupp', 'Mu'],
          
           [{v:'Todd Blickenstaff', f:'Todd Blickenstaff<div style="color:red; font-style:italic">Nickname</div>'},
           'Karen Kaupp', 'Nu'],
           [{v:'Josh Barro', f:'Josh Barro<div style="color:red; font-style:italic">Nickname</div>'},
           'Steven Blake', 'Nu'],
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
      }
