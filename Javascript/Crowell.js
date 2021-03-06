 google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Douglas Crowell', f:'Douglas Crowell<div style="color:red; font-style:italic">Silent D</div>'},
           '', 'Alpha'],

           
           [{v:'Eric Turner', f:'Eric Turner<div style="color:red; font-style:italic">Sexy</div>'},
           'Douglas Crowell', 'Beta'],
           
           
           [{v:'Ashley Isaak', f:'Ashley Isaak<div style="color:red; font-style:italic">Nickname</div>'},
           'Douglas Crowell', 'Delta'],
           
           
           [{v:'Peter Shuffled', f:'Peter Shuffled<div style="color:red; font-style:italic">Nickname</div>'},
           '', 'Epsilon'],
           
           
           [{v:'Sam Stoneill', f:'Sam Stoneill<div style="color:red; font-style:italic">Nickname</div>'},
           'Douglas Crowell', 'Eta'],
           [{v:'Bj Mickles', f:'Bj Mickles<div style="color:red; font-style:italic">Nickname</div>'},
           'Douglas Crowell', 'Eta'],
           
           [{v:'Tyler Waggoner', f:'Tyler Waggoner<div style="color:red; font-style:italic">Nickname</div>'},
           'Douglas Crowell', 'Iota'],
           [{v:'Melane Lyon', f:'Melane Lyon<div style="color:red; font-style:italic">Nickname</div>'},
           'Douglas Crowell', 'Iota'],  
           [{v:'Keegan Condie', f:'Keegan Condie<div style="color:red; font-style:italic">Nickname</div>'},
           'Douglas Crowell', 'Iota'],
           
     
     [{v:'Kris Walker', f:'Kris Walker<div style="color:red; font-style:italic">Nickname</div>'},
           'Douglas Crowell', 'Lambda'],
           
           
           [{v:'Matt Huston', f:'Matt Huston<div style="color:red; font-style:italic">Nickname</div>'},
           'Douglas Crowell', 'Mu'],
           
           
           [{v:'Stephanie Hartley', f:'Stephanie Hartley<div style="color:red; font-style:italic">Nickname</div>'},
           'Kris Walker', 'Nu'],
           
           
           [{v:'Garret Wagoner', f:'Garret Wagoner<div style="color:red; font-style:italic">Nickname</div>'},
           'Kris Walker', 'Xi'],
           
           
           [{v:'Sarah Alley', f:'Sarah Alley<div style="color:red; font-style:italic">Nichola</div>'},
           'Kris Walker', 'Omicron'],
           [{v:'Derrick Ward', f:'Derrick Ward<div style="color:red; font-style:italic">More than meets the eye</div>'},
           'Kris Walker', 'Omicron'],
           
           
           [{v:'Emalee Fisher', f:'Emalee Fisher<div style="color:red; font-style:italic">Nickname</div>'},
           'Sarah Alley', 'Rho'],
           
           
           [{v:'Lindsey Hobbs', f:'Lindsey Hobbs<div style="color:red; font-style:italic">Sparkles</div>'},
           'Sarah Alley', 'Sigma'],
           [{v:'Brittany Earle', f:'Brittany Earle<div style="color:red; font-style:italic">Star</div>'},
           'Sarah Alley', 'Sigma'],
           
           
           [{v:'Kammie Dunnam', f:'Kammie Dunnam<div style="color:red; font-style:italic">Pegasus</div>'},
           'Lindsey Hobbs', 'Tau'],
           [{v:'Madisyn Benge', f:'Madisyn Benge<div style="color:red; font-style:italic">Eevee</div>'},
           'Lindsey Hobbs', 'Tau'],
           [{v:'Lucas Pennington', f:'Lucas Pennington<div style="color:red; font-style:italic">Q-Cumber</div>'},
           'Brittany Earle', 'Tau'],
           
           
           [{v:'Hannah Gibson', f:'Hannah Gibson<div style="color:red; font-style:italic">Hannah "meL" Gibson</div>'},
           'Kammie Dunnam', 'Upsilon'],
           [{v:'Kim Gailey', f:'Kim Gailey<div style="color:red; font-style:italic">Minerva</div>'},
           'Emalee Fisher', 'Upsilon'],
           [{v:'Sage Cox', f:'Sage Cox<div style="color:red; font-style:italic">Sirius</div>'},
           'Brittany Earle', 'Upsilon'],
           [{v:'Rogue Huitron', f:'Rogue Huitron <div style="color:red; font-style:italic">PoNderosA</div>'},
           'Sarah Alley', 'Upsilon'],
           
           
           [{v:'Christopher Herrera', f:'Christopher Herrera<div style="color:red; font-style:italic">G.G.</div>'},
           'Kammie Dunnam', 'Phi'],
           [{v:'Maddie Blew', f:'Maddie Blew<div style="color:red; font-style:italic">Artemis</div>'},
           'Kim Gailey', 'Phi'],
           [{v:'Sarah Miles', f:'Sarah Miles<div style="color:red; font-style:italic">Tink</div>'},
           'Lindsey Hobbs', 'Phi'],
           [{v:'Kanyon Rapp', f:'Kanyon Rapp<div style="color:red; font-style:italic">APoLlo</div>'},
           'Rogue Huitron', 'Phi'],
           [{v:'Brett Kortan', f:'Brett Kortan<div style="color:red; font-style:italic">WaNderer</div>'},
           'Sarah Alley', 'Phi'],
           
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
      }
