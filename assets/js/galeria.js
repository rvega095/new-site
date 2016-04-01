var mySlider;	// A reference to the SliderWall instance.
var err;

function accesorios_invierno(){
	
	}
	
function accesorios_bano(){
	
	}
	
function albunes_fotos(){
	
	}
	
function almohadas_cojines(){
	
	}
	
function andaderas(){
	
	}	
	
function verano(){
	
	}	
	
function aspiradores_nasales(){
	
	}	
	
function barranda_cama(){
	
	}		
	
function biberones(){
	
	}	
	
function bolsas_regalo(){
	
	}	
	
function cadenitas_chupeta(){
	
	}	
	
function cargadores(){
	
	}	
				
function cepillos(){
	
	}	
	
function chillones(){
	
	}	
	
function chupetas(){
	
	}			
	
function cobijas(){
	
	}	
	
function coche_gemelos(){
	
	}	
	
function coches_silla(){
	
	}	
	
function coches_sombrilla(){
	
	}	
	
function corrales(){
	$('#imageSlideshow').fadeOut();
	}	
	
function cuchara(){
	
	}	
			
function lactancia(){
	
	}	
	
	
function cortaunas(){
	
	}	
	
function fajeros_guantes(){
	
	}		
	
function gimnacio_bebe(){
	
	}	
		
function gorritos_bebe(){
	
	}
	
function jugueteria(){
	
	}	
	
function envases(){
	
	}	
	
function medias_bebe(){
	
	}	
	
function mochilas_ninos(){
	
	}				
	
function moises_bebe(){
	
	}		
	
function mordedores(){
	
	}	
	
function moviles_cajas(){
	
	}	
	
function pijamas(){
	
	}	
	
function platos_bebe(){
	
	}			
	
function repuestos(){
	
	}			
	
function sabanas_edredones(){
	
	}								
	
function sillas_comer(){
	
	}
	
function sillas_buster(){
	
	}								
	
function toldos_cuna(){
	
	}			
	
function zapatos(){
	
	}																	
										
					
// Initialize the slider.
$(document).ready(function() {
	
	  
	try {
		// imageSlideshow is the id of the <div> tag that will contain the SliderWall instance.
		$("#imageSlideshow").sliderWallThumbs({
			// general options
			cssClassSuffix: "",
			domainKeys: "",
			imageAlign: "middleCenter", /* topLeft, topCenter, topRight, middleLeft, middleCenter (default), middleRight, bottomLeft, bottomCenter, bottomRight */
			imageScaleMode: "scaleCrop", /* scale, scaleCrop (default), crop, stretch */
			loopContent: true,
			rssFeed: null,
			selectableContent: true,
			
			// slideshow options
			autoSlideShow: true,
			slideShowSpeed: 6,
			
			// timer control options
			showTimer: true,
			timerPosition: "belowControlBar", /* aboveControlBar, belowControlBar (default) */
			
			// control bar options
			autoHideControlBar: true,
			controlsHideDelay: 5,
			controlsShowHideSpeed: 0.2,
			showControlBar: true,
			
			// navigation options
			autoHideNavButtons: true,
			showNavigationButtons: true,
			
			// text options
			autoHideText: true,
			
			// interaction options
			useGestures: true,
			useKeyboard: true,
			useMouseScroll: true,
			pauseOnMouseOver: false,
			disableAutohideOnMouseOver: false,
			
			// transitions
			transitionType: {
				optimizeForIpad: false,  /* If set to true, it would use only the Alpha and Slide effects. */
				random: false,
				transitions: [
					 
					{
						name: "LensGlare",
						duration: 1,
						tweenType: "Expo",
						easing: "easeOut",
						gradientWidth: 100,
						margins: 20,
						lightOffset: 0,
						lightDirection: false
					}, 
					
				]
			},
			
			// callback functions
			init: null,
			contentLoadStart: null,
			contentLoadComplete: null,
			contentLoadError: null,
			contentShow: null,
			contentHide: null,
			slideClick: null,
			slideshowStart: null,
			slideshowStop: null,
			pageChange: null
		});
		
		// This is how you get a reference to the SliderWall object to call 
		// SliderWall methods (mySlider.next(), mySlider.getSelectedIndex()).
		mySlider = $("#imageSlideshow").data("sliderWall");
		
	} catch(err) { /* handle any error messages */ }

});