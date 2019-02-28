  google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Kate Hoffman', f:'Kate Hoffman<div style="color:red; font-style:italic">Purple Sparkler</div>'},
           '', 'Alpha'],
           
           
           [{v:'Cindy Knight', f:'Cindy Knight<div style="color:red; font-style:italic">Darkand</div>'},
           'Kate Hoffman', 'Beta'],
           
           
           [{v:'Leah Evans', f:'Leah Evans<div style="color:red; font-style:italic">No Pants Tuesday</div>'},
           'Kate Hoffman', 'Gamma'],
           [{v:'Carolina Diaz-Topete', f:'Carolina Diaz-Topete<div style="color:red; font-style:italic">Jeopardy</div>'},
           'Kate Hoffman', 'Gamma'],
           [{v:'Dustin Johnson', f:'Dustin Johnson<div style="color:red; font-style:italic">Nickname</div>'},
           'Cindy Knight', 'Gamma'],
           
           
           [{v:'Courtney Hoirup', f:'Courtney Hoirup<div style="color:red; font-style:italic">Love</div>'},
           'Dustin Johnson', 'Delta'],
           
           
           [{v:'Kayleigh Killeen', f:'Kayleigh Killeen<div style="color:red; font-style:italic">Nickname</div>'},
           'Leah Evans', 'Epsilon'],
           
           
           [{v:'Angelica Garcia', f:'Angelica Garcia<div style="color:red; font-style:italic">*Blush*</div>'},
           'Leah Evans', 'Eta'],
           [{v:'Ashley Houser', f:'Ashley Houser<div style="color:red; font-style:italic">Nickname</div>'},
           'Leah Evans', 'Eta'],
           [{v:'Jason Davis', f:'Jason Davis<div style="color:red; font-style:italic">Nickname</div>'},
           'Leah Evans', 'Eta'],
           
           
           [{v:'Jennifer Barret', f:'Jennifer Barret<div style="color:red; font-style:italic">Nickname</div>'},
           'Angelica Garcia', 'Iota'],
           [{v:'Richard Welker', f:'Richard Welker<div style="color:red; font-style:italic">Nickname</div>'},
           'Jason Davis', 'Iota'],
           
           
           [{v:'Nicole Bunnell', f:'Nicole Bunnell<div style="color:red; font-style:italic">Nickname</div>'},
           'Jennifer Barret', 'Lambda'],
           [{v:'Andrew Clark', f:'Andrew Clark<div style="color:red; font-style:italic">Nickname</div>'},
           'Leah Evans', 'Lambda'],
           [{v:'Brittany Brown', f:'Brittany Brown<div style="color:red; font-style:italic">The Unsinkable</div>'},
           'Leah Evans', 'Lambda'],
           [{v:'Alex Ballantyne', f:'Alex Ballantayne<div style="color:red; font-style:italic">Nickname</div>'},
           'Richard Welker', 'Lambda'],

 					 [{v:'Jeremy Ruth', f:'Jeremy Ruth<div style="color:red; font-style:italic">Live Long and Prosper</div>'},
           'Nicole Bunnell', 'Mu'],
           [{v:'Erik Marrs', f:'Erik Marrs<div style="color:red; font-style:italic">Con Bravura</div>'},
           'Brittany Brown', 'Mu'],
           
           [{v:'Alexandra McClean', f:'Alexandra McClean<div style="color:red; font-style:italic">Alethia</div>'},
           'Erik Marrs', 'Nu'],
           [{v:'Dillon Hayes-Johnson', f:'Dillon Hayes-Johnson<div style="color:red; font-style:italic">Nickname</div>'},
           'Brittany Brown', 'Nu'],
           [{v:'Bre Silkwood', f:'Bre Silkwood<div style="color:red; font-style:italic">Nickname</div>'},
           'Alex Ballantyne', 'Nu'],
           
           [{v:'Katie Banbrook', f:'Katie Banbrook<div style="color:red; font-style:italic">Nickname</div>'},
           'Alexandra McClean', 'Xi'],
           [{v:'Danielle Wagstaff', f:'Danielle Wagstaff<div style="color:red; font-style:italic">Nickname</div>'},
           'Erik Marrs', 'Xi'],
           [{v:'Kensie Stallings', f:'Kensie Stallings<div style="color:red; font-style:italic">Hard Corps</div>'},
           'Alex Ballantyne', 'Xi'],
           
           [{v:'Nikki Smith', f:'Nikki Smith<div style="color:red; font-style:italic">Nickname</div>'},
           'Kensie Stallings', 'Omicron'],
           
           [{v:'Alexander Hill', f:'Alexander Hill<div style="color:red; font-style:italic">Nickname</div>'},
           'Alexandra McClean', 'Rho'],
           [{v:'Daniel Quatrone', f:'Daniel Quatrone<div style="color:red; font-style:italic">Apollo</div>'},
           'Erik Marrs', 'Rho'],
           
           [{v:'Tia Imbriani', f:'Tia Imbriani<div style="color:red; font-style:italic">Nickname</div>'},
           'Alexander Hill', 'Sigma'],
           
           [{v:'Blake Simony', f:'Blake Simony<div style="color:red; font-style:italic">Fiyero</div>'},
           'Tia Imbriani', 'Tau'],
           
           [{v:'Tierzah Smith', f:'Tierzah Smith<div style="color:red; font-style:italic">Elphie</div>'},
           'Tia Imbriani', 'Upsilon'],
           [{v:'Cara Wade', f:'Cara Wade<div style="color:red; font-style:italic">Raava</div>'},
           'Blake Simony', 'Upsilon'],
           
           [{v:'Megan Meng', f:'Megan Meng<div style="color:red; font-style:italic">Amidala</div>'},
           'Tierzah Smith', 'Phi'],   
           [{v:'Jennifer Hartmann', f:'Jennifer Hartmann<div style="color:red; font-style:italic">Shaw</div>'},
           'Blake Simony', 'Phi'],
           [{v:'Katie Greenway', f:'Katie Greenway<div style="color:red; font-style:italic">Mitsu</div>'},
           'Cara Wade', 'Phi'],
           
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
      }
