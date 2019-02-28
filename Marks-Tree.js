      google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Thaddeus Marks', f:'Thaddeus Marks<div style="color:#ff69b4; font-style:italic">Village Idiot</div>'},
           '', 'Alpha'],
           
           [{v:'John Duff', f:'John Duff<div style="color:red; font-style:italic">Nickname</div>'},
           'Thaddeus Marks','Beta'],
           
           [{v:'Kristie Williams', f:'Kristie Williams<div style="color:red; font-style:italic">Nickname</div>'},
           'John Duff','Gamma'],
           [{v:'McLane Peterson', f:'McLane Peterson<div style="color:red; font-style:italic">Evil</div>'},
           'John Duff','Gamma'],
           
           [{v:'Amy Flynn', f:'Amy Flynn<div style="color:red; font-style:italic">Chasse, Everything but the Body</div>'},
           'Kristie Williams','Delta'],
           
           [{v:'Sara Boyer', f:'Sara Boyer<div style="color:red; font-style:italic">Nickname</div>'},
           'Amy Flynn','Zeta'],
           
           [{v:'Dallas Grossaint', f:'Dallas Grossaint<div style="color:red; font-style:italic">EGBD 2/3</div>'},
           'Amy Flynn','Kappa'],
           
           [{v:'Robert Brings', f:'Robert Brings<div style="color:red; font-style:italic">Nickname</div>'},
           'Amy Flynn','Lambda'],
           [{v:'Rachel Kyle', f:'Rachel Kyle<div style="color:red; font-style:italic">IQ</div>'},
           'Amy Flynn','Lambda'],
           [{v:'Jeanette McMillan', f:'Jeanette McMillan<div style="color:red; font-style:italic">Sapphire</div>'},
           'Dallas Grossaint','Lambda'],
           
           [{v:'Jade Wheatley', f:'Jade Wheatley<div style="color:red; font-style:italic">Nickname</div>'},
           'Amy Flynn','Mu'],
           [{v:'Peter Rundquist', f:'Peter Rundquist<div style="color:red; font-style:italic">BLG</div>'},
           'Robert Brings','Mu'],
           [{v:'Amanda Lincoln', f:'Amanda Lincoln<div style="color:red; font-style:italic">Babe Harris</div>'},
           'Jeanette McMillan','Mu'],
           
           [{v:'Regina Seubert', f:'Regina Seubert<div style="color:red; font-style:italic">Nickname</div>'},
           'Amy Flynn','Nu'],
           [{v:'Alaric Albiso', f:'Alaric Albiso<div style="color:red; font-style:italic">Hollywood</div>'},
           'Jeanette McMillan','Nu'],
           [{v:'Parker Peterson', f:'Parker Peterson<div style="color:red; font-style:italic">CEO</div>'},
           'Dallas Grossaint','Nu'],
           [{v:'Holly Ake', f:'Holly Ake<div style="color:red; font-style:italic">Watson Wise Gamgee</div>'},
           'Rachel Kyle','Nu'],
           
           [{v:'Arthur Aguilera', f:'Arthur Aguilera<div style="color:red; font-style:italic">Java</div>'},
           'Dallas Grossaint','Xi'],
           [{v:'Gania Humphries', f:'Gania Humphries<div style="color:red; font-style:italic">Phoenix</div>'},
           'Holly Ake','Xi'],
           
           [{v:'Joshua Kepler', f:'Joshua Kepler<div style="color:red; font-style:italic">Nickname</div>'},
           'Peter Rundquist','Omicron'],
           [{v:'Samaquias Lorta', f:'Samaquias Lorta<div style="color:red; font-style:italic">Nickname</div>'},
           'Arthur Aguilera','Omicron'],
           [{v:'Jolene Brown', f:'Jolene Brown<div style="color:red; font-style:italic">Nickname</div>'},
           'Gania Humphries','Omicron'],
           
           [{v:'Jared Yim', f:'Jared Yim<div style="color:red; font-style:italic">Kuppa Glenn Rhee</div>'},
           'Peter Rundquist','Pi'],
           
           [{v:'Randy Bauer', f:'Randy Bauer<div style="color:#ff69b4; font-style:italic">Nickname</div>'},
           'Jared Yim','Rho'],
           [{v:'Amber Stiles', f:'Amber Stiles<div style="color:red; font-style:italic">Nickname</div>'},
           'Arthur Aguilera','Rho'],
           
           
          [{v:'Mariessa Robles', f:'Mariessa Robles<div style="color:black; font-style:italic">Alakai</div>'},
           'Randy Bauer','Sigma'],
            [{v:'Alyssa Maher', f:'Alyssa Maher<div style="color:black; font-style:italic">Athena</div>'},
           'Arthur Aguilera','Sigma'],
           [{v:'Sierra Rude', f:'Sierra Rude<div style="color:red; font-style:italic">Nickname</div>'},
           'Jared Yim','Sigma'],
           [{v:'Robert Barney', f:'Robert Barney<div style="color:red; font-style:italic">Nickname</div>'},
           'Jared Yim','Sigma'],
           [{v:'Tristen Zachary', f:'Tristen Zachary<div style="color:red; font-style:italic">Ares</div>'},
           'Arthur Aguilera','Sigma'],
           
           
          [{v:'Nicolette Guerin', f:'Nicolette Guerin<div style="color:black; font-style:italic">Nalu</div>'},
           'Mariessa Robles','Tau'],
           [{v:'Zach Carpenter', f:'Zach Carpenter<div style="color:black; font-style:italic">Puuwai</div>'},
          'Mariessa Robles', 'Tau'],
          [{v:'Alex Ayala', f:'Alex Ayala<div style="color:black; font-style:italic">Gucci</div>'}, 
          'Alyssa Maher', 'Tau'],
          [{v:'David Davis', f:'David Davis<div style="color:black; font-style:italic">Belukah</div>'}, 
          'Tristen Zachary', 'Tau'],
          
          
          [{v:'Emily Kelso', f:'Emily Kelso<div style="color:black; font-style:italic">Wonderland</div>'},
           'Zach Carpenter', 'Upsilon'],
           [{v:'Miles', f:'Miles<div style="color:black; font-style:italic">But-Is-It-REALLY??</div>'}, 
          'Alyssa Maher', 'Upsilon'],
          [{v:'Elena Imel', f:'Elena Imel<div style="color:black; font-style:italic">Appassionato</div>'}, 
          'David Davis', 'Upsilon'],
           
           
           [{v:'Josh Child', f:'Josh Child<div style="color:black; font-style:italic">Hoku welowelo</div>'},
           'Nicolette Guerin', 'Phi'],
          [{v:'Zach Price', f:'Zach Price<div style="color:black; font-style:italic">Han Solo</div>'},
           'Zach Carpenter', 'Phi'],
          [{v:'Joey Sacino', f:'Joey Sacino<div style="color:black; font-style:italic">Pono Koa</div>'},
          'Mariessa Robles', 'Phi'],
          [{v:'AJ Schinkel', f:'AJ Schinkel<div style="color:black; font-style:italic">Hanu</div>'},
          'Mariessa Robles', 'Phi'],
          [{v:'Elizabeth Alcaraz', f:'Elizabeth Alcaraz<div style="color:black; font-style:italic">Shine-Bright-Like-A-Pinecone</div>'}, 
          'Alyssa Maher', 'Phi'],
          [{v:'Lauren Klokkevold', f:'Lauren Klokkevold<div style="color:black; font-style:italic">Holla-At-Ya-Twirl</div>'}, 
          'Alyssa Maher', 'Phi'],
          [{v:'John Capone', f:'John Capone<div style="color:black; font-style:italic">Exodus</div>'}, 
          'Alex Ayala', 'Phi'],
          [{v:'Kerry Loughran', f:'Kerry Loughran<div style="color:black; font-style:italic">Rinceoir</div>'}, 
          'Elena Imel', 'Phi'],
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
      }
