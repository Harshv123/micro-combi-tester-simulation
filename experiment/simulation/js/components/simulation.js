class Simulation {
    constructor() {
        this.testType = 'indentation';
        this.force = 50;
        this.speed = 30;
        this.depth = 40;
        this.isSimulating = false;
        this.initialize();
    }

    initialize() {
        const simulation = document.getElementById('simulation');
        simulation.innerHTML = this.template();
        this.attachEventListeners();
    }

    template() {
        return `
            <div class="container">
                <h2 class="section-title">Interactive Simulation</h2>
                <p class="section-description">Experience our testing capabilities virtually</p>
                
                <div class="simulation-grid">
                    <div class="simulation-controls">
                        <div class="test-type-buttons">
                            <button class= "btn btn-primary" onclick="movePen()" >
                                Scratch Test
                            </button>
                          
                        </div>
                        
                       
                        <div class="simulation-buttons">
                            <button class="btn btn-primary" id="moveButton">
                              Calibration ➡️
                            </button>
                                                        <button class="btn btn-primary" id="calibrationButton">Calibration ⬅️</button>
                                                        <button  class="btn btn-primary" id="moveToMidButton"  id="moveToMidButton">Microscope</button> 

                                                          <button  class="btn btn-primary" id="moveRightButton">Position Under Indenter</button>
                                                          <button  class="btn btn-primary" id="moveToUpButton">Scratch</button>
                            <button class="btn btn-primary" id="result">output</button>
                            <button class="btn btn-secondary" id="resetSimulation" style="opacity:0;"></button>
                            <button id="reloadButton" class="btn btn-secondary">Reset</button>
                        </div>
                    </div>

                    





<!-- 3d view section -->


                    
                    <div class="simulation-preview">
                    
                        <div class="simulation-canvas">
  <div id="fixedDiv">
   3D Visualization
   <br><br>This is the indenter moving across the material surface mounted on the stage. As the probe scans left to right and back, it demonstrates how the micro-combi tester applies indentation to study the material response under load :



   <?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 28.6.0, SVG Export Plug-In . SVG Version: 9.03 Build 54939)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 800 600" style="enable-background:new 0 0 800 600;" xml:space="preserve">
<g>
	<g id="Layer_1_00000129187720854272899390000001151877931053651354_">
		
			
    <image style="overflow:visible;enable-background:new    ;" width="514" height="210" xlink:href="disk view-1.png"  transform="matrix(0.9 0 0 0.9 170.6976 100.9139)">
		</image>
    <image id="penImg" style="overflow:visible;enable-background:new    ;" width="508" height="800" xlink:href="pen view-1.png"  transform="matrix(0.1008 0 0 0.1008 400.1961 120.2041)">
		</image>
	</g>
</g>
</svg>
   <?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 28.6.0, SVG Export Plug-In . SVG Version: 9.03 Build 54939)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 800 600" style="enable-background:new 0 0 800 600;" xml:space="preserve">
<g>
	<g id="Layer_1_00000015344188267699919070000015409514266023168646_">
		
			
	</g>
</g>
</svg>



  
  </div>













                            <!-- Instruction Section -->
    <div id="instructionSection" class="instruction-section">
        <p>Press the <span id="nextButtonName">Start</span> button to proceed.</p>
    </div>
<div class="model">
                            <?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 800 600">
          <defs>
            <style>
              .cls-1 {
                fill: #4d4d4e;
              }
        
              .cls-2 {
                fill: #f6f6f6;
              }
        
              .cls-3 {
                isolation: isolate;
              }
        
              .cls-4 {
                fill: #4e4e4e;
              }
        
              .cls-5 {
                fill: #4e4e4f;
              }
        
              .cls-6 {
                fill: #fff;
              }
        
              .cls-7 {
                fill: none;
                stroke: #000;
                stroke-miterlimit: 10;
              }
        
              .cls-8 {
                fill: #f7f7f7;
              }
        
              .cls-9 {
                fill: #ced0cf;
              }
        
              .cls-10 {
                fill: #f5f5f5;
              }
        
              .cls-11 {
                fill: #cdcfce;
              }
        
              .cls-12 {
                display: none;
              }
        
              .cls-13 {
                fill: #f1f2f1;
              }
        
              .cls-14 {
                fill: #49494a;
              }
            </style>
          </defs>
          <!-- Generator: Adobe Illustrator 28.6.0, SVG Export Plug-In . SVG Version: 1.2.0 Build 709)  -->
          <g>
            <g id="Layer_1">
              <g>
                <g id="Layer_1-2" data-name="Layer_1" class="cls-12">
                  <image class="cls-3" width="1200" height="800" transform="translate(87.9 99.62) scale(.53)" xlink:href="machine-1.png"/>
                </g>
                <g id="Layer_2">
                  <image class="cls-3" width="82" height="512" transform="translate(237.03 150.93) scale(.48)" xlink:href="machine-2.png"/>
                  <image class="cls-3" width="104" height="513" transform="translate(280.26 150.99) scale(.13)" xlink:href="machine-3.png"/>
                  <image class="cls-3" width="59" height="512" transform="translate(281.84 248.54) scale(.28)" xlink:href="machine-4.png"/>
                  <image class="cls-3" width="507" height="304" transform="translate(282.03 208.59) scale(.13)" xlink:href="machine-5.png"/>
                  <image class="cls-3" width="35" height="512" transform="translate(270.69 150.99) scale(.47)" xlink:href="machine-6.png"/>
                  <image class="cls-3" width="303" height="514" transform="translate(347.62 157.27) scale(.2)" xlink:href="machine-7.png"/>
                  <image class="cls-3" width="512" height="197" transform="translate(430.58 207.92) scale(.2)" xlink:href="machine-8.png"/>
                  <image class="cls-3" width="212" height="504" transform="translate(410.7 208.76) scale(.09)" xlink:href="machine-9.png"/>
                  <image class="cls-3" width="100" height="511" transform="translate(404.44 208.06) scale(.08)" xlink:href="machine-10.png"/>
                  <image class="cls-3" width="49" height="509" transform="translate(517.38 247.32) scale(.28)" xlink:href="machine-11.png"/>
                  <image class="cls-3" width="75" height="513" transform="translate(540.21 145.51) scale(.48)" xlink:href="machine-12.png"/>
                  <image class="cls-3" width="26" height="513" transform="translate(529.86 145.51) scale(.47)" xlink:href="machine-13.png"/>
                  <image class="cls-3" width="92" height="508" transform="translate(520.21 147.7) scale(.14 .12)" xlink:href="machine-14.png"/>
                  <image class="cls-3" width="508" height="405" transform="translate(355.26 126.96) scale(.08)" xlink:href="machine-15.png"/>
                  <image class="cls-3" width="511" height="173" transform="translate(344.1 153.73) scale(.04)" xlink:href="machine-16.png"/>
                  <image class="cls-3" width="511" height="164" transform="translate(386.28 152.74) scale(.04)" xlink:href="machine-17.png"/>
                  <image class="cls-3" width="471" height="372" transform="translate(387.52 258.43) scale(.02)" xlink:href="machine-18.png"/>
                  <image class="cls-3" width="508" height="463" transform="translate(573.42 375.94) scale(.12)" xlink:href="machine-19.png"/>
                  <image class="cls-3" width="512" height="97" transform="translate(176.95 407.71) scale(.9)" xlink:href="machine-20.png"/>
                  <image class="cls-3" width="515" height="94" transform="translate(180.83 357.85) scale(.81)" xlink:href="machine-21.png"/>
                  <path class="cls-8" d="M655.36,301.24l.15-1.46h.15v.18h.15l.15.46"/>
                  <path class="cls-2" d="M419.89,137.84h2.14l2.2.14,1.97.29,1.79.43,1.16.43.93.43.17.29.06.22.06,5.35.06,18.23.06,6.58.06.8,1.27.87.29.43.12.51.23,2.75.12,1.88,1.79.14,1.33.07.46.07.06.07v16.64l-.29.14-3.47.22v13.53l.06,4.85.12.65.69.94.46.58.23.65-.06,2.31-.06.65v.94l.23,1.66v.65l-.29,1.37-.06.65-.41.65-.52.72-.29.51-.06,3.26-.12,1.59-.12.29-.64.29-1.56.36-.35.14-.06.14-.06,1.37v1.37l.06.36.75.22,1.33.22,1.56.43,1.91.8,1.85.94.93.58.69.58.64.72.41.72.46,1.09.12.51.06.94-.06,4.77-.17.87-.46,1.23-.46.8-.58.65-1.04.8.06.72.29,2.31.46,3.04.64,4.2.41,3.26.17,2.53v1.66l-.12.87-.46,1.16-.46.87-.46.72-.29.29-.93.29-4.63.94-1.04.14h-.52l-1.33-.72-.81-.43-1.04-.8-.06,5.86-.12.43-.23.22-.41.29h-.12l.17,1.01.12,1.16v1.01h-11.64l.12-1.59.12-.72v-.58l-.29-.43-.29-.22-.17-.43v-5.93l-.69.36-2.2,1.37-.64.14-1.16-.07-2.03-.36-3.07-.65-.58-.36-.64-.8-.46-1.01-.52-1.23-.29-.72v-.58l.35-2.6.46-4.2.23-2.24.69-5.14.35-2.31.06-.72-.29-.14-.69-.58-.52-.58-.58-.94-.46-1.01-.23-.94-.12-2.53v-3.18l.12-.65.35-.65.64-.87.52-.72.52-.65.64-.51.87-.58,1.62-.8,1.45-.58,1.45-.43,1.51-.29.93-.14.12-.07.06-.8v-2.75l-.46.07h-2.03l-.06-.43v-1.45l-.23-2.68-.12-1.23-.35-.58-.46-.51-.35-.58v-.51l.06-.29-.35-1.09-.06-.72.17-1.23.12-.58-.06-.8-.17-.8.06-.51v-1.3l-.06-.8.12-.36.41-.51.69-1.16.17-.43.06-.8v-9.84l-.17-7.67-.98-.14-1.91-.22-.35-.14-.12-.22-.06-.43-.06-1.74-.06-4.63v-5.21l.06-3.69.06-.87.12-.07,1.91-.07,1.39-.14.29-.22.29-.51.41-1.52.46-1.88.75-2.03.12-.72.06-.87.06-3.76.06-7.16.06-18.88.29-.43.81-.43,1.16-.43,1.51-.36,1.91-.29,2.26-.14-.04.04Z"/>
                  <path class="cls-14" d="M417.4,230.29h2.66l2.03.07,4.75.29,2.08.22,2.89.36.06.14-.35.14-1.27.07-.46.14-.17.29-.12.43-.06.58v2.03l.23.29.75.22,1.33.22,1.56.43,1.91.8,1.85.94.93.58.69.58.64.72.41.72.46,1.09.12.51.06.94-.06,4.77-.17.87-.46,1.23-.46.8-.58.65-1.04.8.06.72.29,2.31.46,3.04.64,4.2.41,3.26.17,2.53v1.66l-.12.87-.46,1.16-.46.87-.46.72-.29.29-.93.29-4.63.94-1.04.14h-.52l-1.33-.72-.81-.43-1.04-.8-.06,5.86-.12.43-.23.22-.41.29h-.12l.17,1.01.12,1.16v1.01h-11.64l.12-1.59.12-.72v-.58l-.29-.43-.29-.22-.17-.43v-5.93l-.69.36-2.2,1.37-.64.14-1.16-.07-2.03-.36-3.07-.65-.58-.36-.64-.8-.46-1.01-.52-1.23-.29-.72v-.58l.35-2.6.46-4.2.23-2.24.69-5.14.35-2.31.06-.72-.29-.14-.69-.58-.52-.58-.58-.94-.46-1.01-.23-.94-.12-2.53v-3.18l.12-.65.35-.65.64-.87.52-.72.52-.65.64-.51.87-.58,1.62-.8,1.45-.58,1.45-.43,1.51-.29,1.33-.22-.06-3.54-.06-.29h-2.43v-.22l1.51-.22,1.74-.14,1.56-.22,2.14-.22.29-.22h-.03Z"/>
                  <path class="cls-14" d="M420.88,137.92l1.97.07,2.08.22,1.56.29,1.79.51,1.51.58.35.22.06.43.06,6.94.06,23.8-.58-.14-1.91-.43-1.22-.22-1.39-.14-1.1-.07h-4.75l-3.01.22-2.08.29-1.97.43-.35.07v-2.17l.06-7.52.06-12.88.06-8.75,1.79-.65,1.85-.51,2.03-.36,1.45-.14,1.62-.07v-.02Z"/>
                  <path class="cls-2" d="M410.28,249.82l.75.07,1.33.22,1.22.43,1.16.36,1.22.51.41.29-.17.22-.35,1.95-.46,3.62-.35,2.6-.52,3.69-.41,2.82-.58,4.34-.23,1.37-.52-.14-1.97-.8-.64-.22-.69-.14-1.16-.29-1.16-.22-.06-.14h.12l.17-1.52.35-2.82.58-3.91.35-2.39.17-.94.17-1.23.41-2.6.69-4.05.17-1.09h0Z"/>
                  <path class="cls-2" d="M431.65,249.82h.35l-.06.36.35,1.88.23,1.16.41,2.39.41,2.82.52,3.54.41,2.97.29,2.1.23,1.52.17,1.37v.43l-.29.22-1.74.36-1.62.43-1.68.72-.75.43-.17-.07.17-.51-.35-2.68-.29-1.81-.17-1.52-.41-2.97-.46-3.26-.23-1.81-.12-.8-.23-2.1-.29-2.1-.17-1.16v-.36l.69-.36,1.16-.43.52-.14.23.07-.29.29h-.23l.06.51.23.72.23,1.09.17,1.16.35,2.1.17,1.16.23,1.52.17,1.16.17,1.37.17.94.23,1.52.29,2.17.17,1.16.17,1.37.29,1.37v.72l.29.07.17-.22h.12l-.64-3.98-.17-.8-.12-.14.06-.51-.12-.58v-.58l-.87-6.29-.17-1.23v-.22l-.23-.14v-.72h-.12v-.36l.06-.07v-.58l-.52-3.76-.06-.43.52-.22,1.33-.22.75-.07.03.03Z"/>
                  <path class="cls-14" d="M432.57,177.7l3.07.07.41.07v16.35l-.12.29-1.39.07h-1.91l-.06-16.86h0Z"/>
                  <path class="cls-14" d="M408.89,177.7h.64l.06.07-.06,16.93-3.3-.29-.06-.07-.06-.8v-15.26l.06-.43,2.72-.14h0Z"/>
                  <path class="cls-8" d="M421.57,258.43h1.33l-.12,1.37-.06,13.46-.06,2.68v3.04l-.06.14-.17.07h-1.91l-.12-.07v-1.59l.06-.29v-2.39l.06-2.89v-2.6l.06-.94v-1.09l.23-4.77.12-1.81.06-2.17.06-.07.52-.07h0Z"/>
                  <path class="cls-2" d="M411.96,235.5h.29l-.17.14-1.56.43-.12.07v.14h.17l.17.22.17.65v.58h1.04l.93-.07h1.04l.17.07.17.43v.72l-.12,1.3-.35.14-1.27.29-1.97.58-2.32.8-1.97.87-.35.07.17-.22.41-.29.17-.87v-1.3l.23-.72.23-.43.46-.43h.12l-.06-.72-.12-.8-.17-.07-1.1.43-.87.43-.93.58-.81.65-.12-.07.52-.58,1.04-.72,1.51-.8,1.79-.72,1.45-.43,1.51-.29.58-.07h.04Z"/>
                  <path class="cls-2" d="M435.76,249.46h.52l.23.43.23,1.45.75,5.57,1.16,8.1.46,3.83.06.8v.8l-.23.14-.12-.07-.69-.14-.17-.22-.17-1.16-.29-2.03-.29-1.81-.29-2.17-.23-1.37-.23-2.03-.29-1.74-.29-2.6-.23-1.37-.35-3.47v-.65l.12-.22.35-.07h0Z"/>
                  <path class="cls-2" d="M406.06,249.46l.98.14-.12.58-.17,2.24-.41,3.76-.29,1.81-.29,2.31-.35,2.39-.87,6.66-.12.8-.17.14-.46.07h-.69l.06-1.37.41-3.11.69-5.21,1.16-8.1.41-2.75.12-.29.12-.07h0Z"/>
                  <path class="cls-14" d="M413.18,250.77h.12l.23.43.12.65-.23,1.59-.46,3.47-.46,2.6-.35,2.75-.29,1.95-.23,1.23-.23,1.74-.17,1.66-.29.94-.35.65-.17.07-.06-.36.75-5.06.69-5.14.93-6.87.35-2.1.12-.22-.02.02Z"/>
                  <path class="cls-2" d="M432.46,238.32l.64.07,1.16.36.93.58.35.51.06.65-.06.36v1.09l.06.43-.06.14-.46-.07-1.51-.58-1.45-.51-.17-.14-.06-.29.12-1.23v-.65l.12-.51.12-.14.23-.07h-.02Z"/>
                  <path class="cls-11" d="M424,170.54l.23.07-.46.29-.12.22h-.12l-.12.43-.12.51-.06,1.81v1.16l-.35,5.21-.17,1.66-.06,1.23-.12,4.92-.12,4.56-.06,1.01-.06,2.68v.72l-.06,1.52-.06,2.75-.06,5.21v14.03l-.12,4.41-.06,1.59v1.52l.17.72.17.36v.14h.12l.41.58.06.14-.35-.14-.52-.65-.29-.72-.06-.51v-.8l.06-.14v-1.45l.06-.14v-1.01l.06-.22.06-1.52v-2.6l.06-1.88v-1.74l-.06-.51.06-3.33v-9.62l.06-1.88v-.8l.06-1.3v-1.66l.06-.87.06-4.12.06-.43.12-3.54v-2.68l.06-.43v-.94l.12-2.31v-.65l.12-1.3.12-1.66.17-3.62v-2.39l.06-.65.29-.72.52-.43.17-.07v-.02Z"/>
                  <path class="cls-2" d="M429.85,235.5l1.1.14,1.39.29,1.39.43,1.79.8,1.56.8.93.58.69.58.64.72.41.72.46,1.09.12.51.06.94-.06,4.77-.17.87-.46,1.23-.46.8-.58.65-1.04.8.06.72.29,2.31.46,3.04.64,4.2.41,3.26.17,2.53v1.66l-.12.87-.46,1.16-.46.87-.46.72-.29.29-.93.29-4.23.87h-.35v-.07l2.78-.65,2.08-.43.58-.29.46-.51.52-.87.46-1.01.23-.8v-2.24l-.23-2.24-.64-4.7-.69-4.85-.35-2.68-.12-1.09v-.51l.46-.36.64-.43.69-.8.41-.8.29-.87.17-1.09.06-4.41.06-.14-.06-.94-.29-.94-.35-.8-.52-.8-.81-.8-.93-.58-1.1-.58-2.89-1.23-1.27-.43-2.03-.43-.12-.14h0Z"/>
                  <path class="cls-11" d="M427.3,170.69l.35.07.35.29.17.65.06,2.1v2.46l.06,4.63.06,1.74v4.34l.06.29v2.75l.06.29v14.47l.06.58v11.21l.06,3.62v8.54l-.17.94-.29.58-.35.29-.23.14-.23-.07.23-.14h.17v-.14h.12v-.14h.12l.12-.36.17-.36.17-1.09v-10.34l-.06-3.26-.06-14.4v-7.16l-.06-3.54-.12-8.61-.12-3.69v-5.5l-.17-.8-.29-.14-.23-.22v-.02Z"/>
                  <path class="cls-2" d="M403.39,239.34v.22l-.46.8-.52.72-.35.65-.17.51-.06.8.06.22.06,4.27.23,1.16.41.94.52.87.35.51.75.65.58.43.12.29-.81,5.57-.52,3.76-.52,4.77-.35,3.04v.8l.52,1.16.46,1.01.46.72.46.51.46.22,2.89.58,1.97.51v.07l-.81-.07-4.17-.87-.58-.36-.64-.8-.46-1.01-.52-1.23-.29-.72v-.58l.35-2.6.46-4.2.23-2.24.69-5.14.35-2.31.06-.72-.29-.14-.69-.58-.52-.58-.58-.94-.46-1.01-.23-.94-.12-2.53v-3.18l.12-.65.35-.65.64-.87.52-.72.06-.07v-.05Z"/>
                  <path class="cls-8" d="M415.78,267.69h.12v.14h.12l.12.36.06.43v2.39l-.12,2.6-.06,2.03.06,2.89.06.65-.12.14h-.52v-7.52l.17-2.97.12-1.16v.02Z"/>
                  <path class="cls-2" d="M429.85,235.5l1.1.14,1.39.29,1.39.43,1.79.8,1.56.8.93.58.69.58.64.72.41.72.46,1.09.12.51.06.94-.06,4.77-.17.87-.23.65h-.12l.23-1.16.06-.51.06-4.41.06-.14-.06-.94-.29-.94-.35-.8-.52-.8-.81-.8-.93-.58-1.1-.58-2.89-1.23-1.27-.43-2.03-.43-.12-.14h0Z"/>
                  <path class="cls-4" d="M409.3,220.53l.12.07.06,2.31v1.01l-.12.07-.29-.36-.12-.29-.35-.36-.23-.65-.06-.94.29-.36.69-.51h.01Z"/>
                  <path class="cls-14" d="M432.86,220.74l.87.43.06.07v.87l-.06.8-.17.36-.23.36-.52.29v-2.97l.06-.22h0Z"/>
                  <path class="cls-10" d="M415.55,280.42l.17.29.46,1.01.81,1.45v.07h-1.74l.12-1.59.17-1.23h0Z"/>
                  <path class="cls-2" d="M414.45,273.19h.29l.12.22.06,3.83.06,1.95.23.43.23.36-.06.14-.46-.43-.17-.43v-5.93l-.69.36-.93.58-.12-.07.98-.72.46-.29h0Z"/>
                  <path class="cls-11" d="M434.19,239.19l.23.07v.14h.12l.06.43.06,1.01.06.36v.72l-.29.07.17-.07-.06-.51-.12-.29-.06-1.59-.17.07-.12.51-.12.94.06.51.12.22-.23-.07-.17-.22v-.87l.12-1.01.23-.36.12-.07h0Z"/>
                  <path class="cls-8" d="M403.39,239.34v.22l-.46.8-.52.72-.35.65-.17.51-.06.8.06.22v2.31l-.12.14-.06-.22v-3.18l.12-.65.35-.65.64-.87.52-.72.06-.07h-.01Z"/>
                  <path class="cls-13" d="M440.27,243.17h.06v4.7l-.17.87-.23.65h-.12l.23-1.16.06-.51.06-4.41.12-.14h0Z"/>
                  <path class="cls-8" d="M434.19,239.55h.17l.06.36.06,1.23.12.29v.51l-.35-.07-.29-.29-.06-.51.17-1.3.12-.22h0Z"/>
                  <path class="cls-11" d="M430.49,222.99l.12.07v.72l-.06,1.16.17.8.06.22v1.09l-.12.72.17.22-.06.22-.23-.29-.12-.51.12-.29v-.72l-.12-.36v-.8l-.17-.43-.06-.51.17-.22.06-.36-.06-.29.06-.29.06-.14h0Z"/>
                  <path class="cls-2" d="M438.59,272.61v.22l-.46.72-.29.29-.93.29-4.23.87h-.35v-.07l2.78-.65,2.08-.43.58-.29.46-.51.29-.36.06-.07h.01Z"/>
                  <path class="cls-14" d="M432.46,214.16l.46.43.46.51.35.58.06.14v.58l-.23-.14-.58-.94-.35-.58-.17-.36v-.22h0Z"/>
                  <path class="cls-14" d="M432.8,216.91l.35.36.52.8.12.29v.22l-.58-.07-.29-.07-.12-1.52h0Z"/>
                  <path class="cls-14" d="M409.41,214.23h.12l-.06.8-.17.36-.52.65-.17.29-.17-.07-.12-.22.06-.29.75-.94.29-.58h0Z"/>
                  <path class="cls-5" d="M409.24,217.06h.12v.65l-.29.43-.17.36-.52.07.06-.43.41-.58.29-.43.12-.07h-.02Z"/>
                  <path class="cls-11" d="M431.18,193.76h.06v.36l-.12.36.17.36v.36l-.06.29-.06.51.12.07h-.23l.06.58h-.17l-.12-.36-.06-.07v-.51l.17-.22-.06-.65.06-.29-.06-.29.29-.51h0Z"/>
                  <path class="cls-8" d="M429.56,232.25h.06v3.11l-.23-.29v-2.03l.12-.72.06-.07h0Z"/>
                  <path class="cls-10" d="M430.26,231.52h.93l-.06.14-1.22.36-.17.07-.06.14h-.12l.06-.36.29-.29.35-.07h0Z"/>
                  <path class="cls-10" d="M435.47,274.2l.23.07-.17.14-2.84.58h-.35v-.07l2.78-.65.35-.07Z"/>
                  <path class="cls-11" d="M431.18,199.69h.29l.17.14h.35l-.06.36-.17.22h-.23v-.14l-.29-.07-.23.14.06-.51h.12v-.14h0Z"/>
                  <path class="cls-2" d="M427.65,273.26l.29.07,1.16.8,1.27.72.06.14-.35-.14-1.39-.72-1.04-.8v-.07h0Z"/>
                  <path class="cls-8" d="M439.58,269.21h.06v.72l-.12.87-.46,1.16-.35.65h-.12l.12-.36.41-.8.29-.8.06-.29.06-1.01.06-.14h-.01Z"/>
                  <path class="cls-11" d="M411.67,238.18l.23.07.17.43.12.58v.72l-.23.65-.06-.29.06-.22v-.87l-.17-.87-.12-.22v.02Z"/>
                  <path class="cls-14" d="M408.72,224.29l.46.43.35.14.06.29-.06.14h-.29l-.35-.36-.17-.43v-.22h0Z"/>
                  <path class="cls-1" d="M433.44,224.58h.12l-.12.29-.29.29-.35.22h-.12l.12-.58.64-.22h0Z"/>
                  <path class="cls-8" d="M439.81,249.39l.06.14-.41.87-.52.72-.46.43-.12-.07.93-1.09.46-.94.06-.07h0Z"/>
                  <path class="cls-8" d="M414.45,273.19h.29v.22l-.35.07-1.27.8-.12-.07.98-.72.46-.29h0Z"/>
                  <path class="cls-11" d="M422.79,170.76l.12.07-.17.29h-.12l-.12.36-.23.65-.06.94-.12.14v-1.01l.23-.8.23-.36h.12l.12-.29h0Z"/>
                  <path class="cls-11" d="M407.85,239.34l.06.29-.06.72.12,1.45-.12-.22-.12-.72-.06-.8.12-.58.06-.14h0Z"/>
                  <path class="cls-11" d="M428.63,172.06l.12.29.17,1.45v.51h-.06l-.12-.58h-.06v-.58h-.06v-.43h-.06l.06-.65h0Z"/>
                  <path class="cls-11" d="M431.93,229.79l.23.22v.72l-.17-.07-.12-.36.06-.51Z"/>
                  <path class="cls-11" d="M431.12,204.69l.12.14v1.59l-.12-.29-.06-.29.06-.29-.06-.36.06-.51h0Z"/>
                  <path class="cls-11" d="M431.82,226.97h.06v1.52l-.17-.22.06-1.23.06-.07h0Z"/>
                  <path class="cls-9" d="M430.95,200.49l.17.07.06.22h.17l.06.22h-.12v.22h-.17v-.14h-.12l-.06-.58h0Z"/>
                  <path class="cls-11" d="M431.12,217.85h.06v.65l-.12.72-.12-.14v-.58l.17-.65h0Z"/>
                  <path class="cls-11" d="M409.82,236.66h.06v1.52l-.23-.07.12-.43.06-1.01h0Z"/>
                  <path class="cls-11" d="M430.89,229.71l.06.22-.17.43-.17.22-.12-.07.17-.36.12-.36.12-.07h0Z"/>
                  <path class="cls-11" d="M422.9,230l.52.14.12.14-.06.07h-.64v-.07l.29-.07-.23-.22h0Z"/>
                  <path class="cls-11" d="M431.82,228.7l.12.22.06.51-.06.36h-.06l-.06-.36v-.72h0Z"/>
                  <path class="cls-11" d="M431.59,197.89l.29.36.17.29h-.17v-.14h-.29v-.51Z"/>
                  <path class="cls-11" d="M431.53,197.09l.17.07.06.36-.17.07-.17-.22.12-.29h0Z"/>
                </g>
              </g>
              <g></g>
              <g>
                <path class="cls-6" d="M443.93,277.4"/>
                <path class="cls-7" d="M443.93,277.4"/>
              </g>
              <g>
                <path class="cls-6" d="M478.9,268.5"/>
                <path class="cls-7" d="M478.9,268.5"/>
              
              </g>
              <image id="targetObject" width="512" height="64" transform="translate(295.66 351.78) scale(.43)" xlink:href="machine-22.png"/>
              <image width="512" height="33" transform="translate(296.18 378.04) scale(.4)" xlink:href="machine-23.png"/>
              <image width="183" height="512" transform="translate(499.66 350.54) scale(.08)" xlink:href="machine-24.png"/>
              <image width="512" height="36" transform="translate(310.34 358.78) scale(.37)" xlink:href="machine-25.png"/>
              <image width="147" height="512" transform="translate(387.5 345.42) scale(.01)" xlink:href="machine-26.png"/>
              <image width="512" height="21" transform="translate(317.31 364.72) scale(.35)" xlink:href="machine-27.png"/>

              
              <g>
                <path class="cls-6" d="M416.96,267.02"/>
                <path class="cls-7" d="M416.96,267.02"/>
              </g>

              <!-- moveable part -->
              <!-- <g>
                <image class="moveable" width="512" height="169" transform="translate(383.47 348.69) scale(.16)" xlink:href="machine-35.png"/>
                <image class="moveable" width="512" height="256" transform="translate(444.07 287.45) scale(.02)" xlink:href="machine-33.png"/>
                <image class="moveable" width="512" height="356" transform="translate(393.55 309.91) scale(.12)" xlink:href="machine-34.png"/>
                <image class="moveable" width="228" height="512" transform="translate(394.03 285.01) scale(.02)" xlink:href="machine-31.png"/>
                <image class="moveable" width="512" height="136" transform="translate(383.03 328.27) scale(.16)" xlink:href="machine-36.png"/>
                <image class="moveable" width="512" height="112" transform="translate(400.78 284.47) scale(.09)" xlink:href="machine-28.png"/>
                <image class="moveable" width="512" height="279" transform="translate(400.78 293.06) scale(.09)" xlink:href="machine-29.png"/>
                <image class="moveable" width="419" height="512" transform="translate(393.14 299.67) scale(.02)" xlink:href="machine-37.png"/>
                <image class="moveable" width="373" height="512" transform="translate(444.83 299.64) scale(.02)" xlink:href="machine-38.png"/>
                <image class="moveable" width="128" height="512" transform="translate(450.26 283.51) scale(.02)" xlink:href="machine-30.png"/>
                <image class="moveable" width="512" height="293" transform="translate(396.63 287.02) scale(.01)" xlink:href="machine-32.png"/>
            </g>
             -->
            <g>
              <image class="moveable" width="1024" height="450" transform="translate(-190.63 89.02) " xlink:href="holder.png"/>
            </g>
            
              
              <g>
                <path class="cls-6" d="M433.43,268.39"/>
                <path class="cls-7" d="M433.43,268.39"/>
              </g>
              
             
            </g>
          </g>
        </svg>
</div>
          <!-- Separate div for the button and dropdown menu -->
                        <div class="procedure-dropdown">
                            <button id="procedureButton" class="btn btn-primary">Show Procedure</button>
                            <div id="procedureMenu" class="dropdown-content">
                                <span id="closeButton">&times;</span>
                                <p>Procedure of Micro Combi Texter:</p>
                                <ol>
                                    <p>Note: The material is already loaded on the stage.</p>
                                    <li>Step 1:   Calibration ➡️ : The stage Move from left to right For Calibration</li>
                                    <li>Step 2: Calibration ⬅️ : The stage Move from right to Left For Calibration.</li>
                                    <li>Step 4: Microscope : Set Postion under the Microscope.</li>
                                  
                                    <li>Step 4 : Position Under Indenter : Set Postion under Indenter.</li>
                                       <li>Step 5: Scratch : Moves the stage up under the Indenter For scratching.</li>
                                </ol>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
       
        <!-- Results Section -->
        <div id="resultsSection" class="results-section">
            <h3>Results</h3>
            <div class="slider-container">
                <button id="scrollLeft" class="arrow-button">&larr;</button>
                <div class="image-container">
                    <div class="slide">
                        <img src="2D optical profilo  image of micro scratch.jpeg" alt="Result 1">
                        <p class="image-title">2D optical profilo  image of micro scratch</p>
                    </div>
                    <div class="slide">
                        <img src="3D profilo image of micro scratch.jpeg" alt="Result 2">
                        <p class="image-title">3D profilo image of micro scratch</p>
                    </div>
                   <div class="slide">
                        <img src="3D profilo image of micro scratch.jpeg" alt="Result 2">
                        <p class="image-title">3D profilo image of micro scratch</p>
                    </div>
                    <div class="slide">
                        <img src="Scratch parameters.jpeg" alt="Result 4" stye="width 100px, height=100px">
                        <p class="image-title">Scratch parameters</p>
                    </div>
                </div>
                <button id="scrollRight" class="arrow-button">&rarr;</button>
            </div>
        </div>
        `;
    }
    attachEventListeners() {
        const testButtons = document.querySelectorAll('[data-test]');
        testButtons.forEach(button => {
            button.addEventListener('click', () => this.setTestType(button.dataset.test));
        });

        const sliders = document.querySelectorAll('.parameter-slider');
        sliders.forEach(slider => {
            slider.addEventListener('input', (e) => this.updateParameter(e.target));
        });

        document.getElementById('resetSimulation').addEventListener('click', () => this.resetSimulation());

        // Add event listeners for the Output button
        document.getElementById('result').addEventListener('click', () => this.showResults());

        // Add event listeners for the slider buttons
        document.getElementById('scrollLeft').addEventListener('click', () => this.changeSlide(-1));
        document.getElementById('scrollRight').addEventListener('click', () => this.changeSlide(1));
    }

    showResults() {
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.style.display = 'block'; // Show the results section
        this.currentSlide = 0; // Reset to the first slide
        this.showSlide(this.currentSlide); // Show the first slide
    }

    showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`; // Move slides based on index
        });
    }

    changeSlide(direction) {
        const slides = document.querySelectorAll('.slide');
        this.currentSlide += direction; // Update current slide index
        if (this.currentSlide < 0) {
            this.currentSlide = slides.length - 1; // Loop to last slide
        } else if (this.currentSlide >= slides.length) {
            this.currentSlide = 0; // Loop to first slide
        }
        this.showSlide(this.currentSlide); // Show the updated slide
    }

    createParameterControl(label, name, value) {
        return `
            <div class="parameter-control">
                <label>${label}</label>
                <input type="range" min="0" max="100" value="${value}"
                       data-param="${name}" class="parameter-slider">
                <div class="parameter-value">${value}</div>
            </div>
        `;
    }


}

new Simulation();

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the button and dropdown menu
    const procedureButton = document.getElementById("procedureButton");
    const procedureMenu = document.getElementById("procedureMenu");
    const closeButton = document.getElementById("closeButton");

    // Toggle the dropdown menu when the button is clicked
    procedureButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click from propagating to the document
        if (procedureMenu.style.display === "block") {
            procedureMenu.style.display = "none"; // Hide the menu if it's already visible
        } else {
            procedureMenu.style.display = "block"; // Show the menu if it's hidden
        }
    });

    // Close the dropdown menu when the close button is clicked
    closeButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click from propagating to the document
        procedureMenu.style.display = "none"; // Hide the menu
    });

    // Close the dropdown menu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (procedureMenu.style.display === "block" && !procedureMenu.contains(event.target) && !procedureButton.contains(event.target)) {
            procedureMenu.style.display = "none"; // Hide the menu
        }
    });
});

document.getElementById('reloadButton').addEventListener('click', function() {
    location.reload(); // Reloads the current page
});
