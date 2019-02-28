      google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Kim Detro', f:'Kim Detro<div style="color:red; font-style:italic">Kimberet</div>'},
           '', 'Alpha'],
           
           
           [{v:'Jeff Gander', f:'Jeff Gander<div style="color:red; font-style:italic">God of Biskitz</div>'},
           'Kim Detro', 'Beta'],
           [{v:'Thomas Imlay', f:'Thomas Imlay<div style="color:red; font-style:italic">Ducky</div>'},
           'Kim Detro', 'Beta'],
           
           
          [{v:'Joe Ziegler', f:'Joe Ziegler<div style="color:red; font-style:italic">Cashman</div>'},
           'Jeff Gander', 'Gamma'],
           [{v:'Chase Glorfield', f:'Chase Glorfield<div style="color:red; font-style:italic">Spaceman Spiff</div>'},
           'Jeff Gander', 'Gamma'],
           
           [{v:'Jason Durrand', f:'Jason Durrand<div style="color:red; font-style:italic">Nickname</div>'},
           'Jeff Gander', 'Delta'],
           
           
           [{v:'Ryan Wells', f:'Ryan Wells<div style="color:red; font-style:italic">Nickname</div>'},
           'Jeff Gander', 'Epsilon'], 
           
           
           [{v:'Sarah Goodenow', f:'Sarah Goodenow<div style="color:red; font-style:italic">Nickname</div>'},
           'Jeff Gander', 'Eta'],
           [{v:'Roderick Royce', f:'Roderick Royce<div style="color:red; font-style:italic">Nickname</div>'},
           '', 'Eta'],
           [{v:'Stephen Barrett', f:'Stephen Barrett<div style="color:red; font-style:italic">Con Aqua</div>'},
           'Ryan Wells', 'Eta'],
           [{v:'Katie Burdick', f:'Katie Burdick<div style="color:red; font-style:italic">Nickname</div>'},
           'Ryan Wells', 'Eta'],
           
           
           [{v:'Jen Held', f:'Jen Held<div style="color:red; font-style:italic">Cameo</div>'},
           'Stephen Barrett', 'Iota'],
           [{v:'Kiwi McCoy', f:'Kiwi McCoy<div style="color:red; font-style:italic">Nickname</div>'},
           'Stephen Barrett', 'Iota'],
           
           [{v:'Chase Huffmann', f:'Chase Huffmann<div style="color:red; font-style:italic">Nickname</div>'},
           'Stephen Barrett', 'Lambda'],
           [{v:'Mark Young', f:'Mark Young<div style="color:red; font-style:italic">Nickname</div>'},
           'Stephen Barrett', 'Lambda'],
           [{v:'Aubrey Morris', f:'Aubrey Morris<div style="color:red; font-style:italic">Nickname</div>'},
           'Jen Held', 'Lambda'],
           
           
        [{v:'Troy Gunter', f:'Try Gunter<div style="color:red; font-style:italic">Nickname</div>'},
           'Aubrey Morris', 'Mu'],
           [{v:'Thomas Garrigus', f:'Thomas Garrigus<div style="color:red; font-style:italic">Nickname</div>'},
           'Aubrey Morris', 'Mu'],
           
           
           [{v:'Erik Held', f:'Erik Held<div style="color:red; font-style:italic">Wagner</div>'},
           'Stephen Barrett', 'Xi'],
           
           
           [{v:'Nick Walker', f:'Nick Walker<div style="color:red; font-style:italic">Catch Em All</div>'},
           'Erik Held', 'Omicron'],
           [{v:'Cody Peterman', f:'Cody Peterman<div style="color:red; font-style:italic">Handy Dandy</div>'},
           'Erik Held', 'Omicron'],
           
           
           [{v:'Matt Estes', f:'Matt Estes<div style="color:red; font-style:italic">Nickname</div>'},
           'Cody Peterman', 'Rho'],
           
           
           [{v:'Andrew Hensiek', f:'Andrew Hensiek<div style="color:red; font-style:italic">Sir Gawin</div>'},
           'Cody Peterman', 'Sigma'],
           
           
           [{v:'Kylie Sheffield', f:'Kylie Sheffield<div style="color:red; font-style:italic">Lloyd Weber</div>'},
           'Erik Held', 'Tau'],
           [{v:'Leanne Worth', f:'Leanne Worth<div style="color:red; font-style:italic">Monarch</div>'},
           'Andrew Hensiek', 'Tau'],
           
           
           [{v:'Natalya Bleier', f:'Natalya Bleier<div style="color:red; font-style:italic">Duchess Aigle</div>'},
           'Andrew Hensiek', 'Upsilon'],
           [{v:'Declan Haro', f:'Declan Haro<div style="color:red; font-style:italic">Prince Anatis</div>'},
           'Leanne Worth', 'Upsilon'],
           [{v:'Kelsey Cooper', f:'Kelsey Cooper<div style="color:red; font-style:italic">Nightingale</div>'},
           'Kylie Sheffield', 'Upsilon'],
           
           
           [{v:'Zachary Marcin', f:'Zachary Marcin<div style="color:red; font-style:italic">Halcyon</div>'},
           'Kelsey Cooper', 'Phi'],
           [{v:'Sebastian Szep', f:'Sebastian Szep<div style="color:red; font-style:italic">Peregrine</div>'},
           'Kelsey Cooper', 'Phi'],
           [{v:'Alyssa Salcido', f:'Alyssa Salcido<div style="color:red; font-style:italic">Comtesse Rose de Beaumont</div>'},
           'Natalya Bleier', 'Phi'],
           [{v:'Emily Gacovino', f:'Emily Gacovino<div style="color:red; font-style:italic">Blackbird</div>'},
           'Kylie Sheffield', 'Phi'],
           [{v:'Cameron Yund', f:'Cameron Yund<div style="color:red; font-style:italic">Duke Conall</div>'},
           'Andrew Hensiek', 'Phi'],
           [{v:'Michael Huebert', f:'Michael Huebert<div style="color:red; font-style:italic">Prince Aranea Simia</div>'},
           'Leanne Worth', 'Phi'],
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
      }
