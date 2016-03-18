

// var random_images_array = ["lyaponuv.png","algart.png","gaussianint.png","piproof.png","kleindiagram.png","menger.png","supersymmetry.png","complexjulia.png","inversequatjulia.png","complexjulia2.png","sextic.png","rootsofunity.png","gameoflife.png","newton.jpg","algart.jpg","quaternion.png","lorenz.png","icosahedron.png","mobius.png","quasicrystal.jpg","multmod.png","mandelbulb.png","automata.png","automataGOL.png","3djulia.png","equalareas.png","kleinj.jpg","circlepacking.png","moire2.jpg","cayleygraph.png","closedcurve.png","spidron.png","complexplot.png","strangeattractor.png","impossiblegeometry.png","mobiusobj.png","circlepackings.jpg","3dmand.jpg","conchoid5Hypocycloid.png","overlappingcubes.png","5cubesurface.png","demaine.png","discreteexpmap.gif","7dhypercube.png","algnumbers.png","ordinals.png","irreduciblefractions.gif","appoloniangasket.png","epicycloid2ncusps.gif","quasicrystal.gif","recursion.gif","galaxymagfieldplanck.jpg","primesin1000.png","csharp.gif","projection.jpg","underwatercropcircles.png","spirograph.gif","vortexstreets.png","algarttworules.png"];

var random_images_array = [["lyaponuv.png", "http://picturesofmath.blogspot.com/2011/08/stability-and-chaos-are-analyzed-by.html"],
["algart.png", "http://picturesofmath.blogspot.com/2011/08/algorithmic-art-created-by-program.html"],
["menger.png", "http://picturesofmath.blogspot.com/2011/07/interesting-new-look-at-menger-sponge.html"],
["supersymmetry.png", "http://picturesofmath.blogspot.com/2011/10/e8-rotated-from-f4-towards-g2-by.html"],
["complexjulia.png", "http://picturesofmath.blogspot.com/2011/12/spherical-version-of-2.html"],
["inversequatjulia.png", "http://picturesofmath.blogspot.com/2011/12/basic-inverse-quaternion-julia-set.html"],
["complexjulia2.png", "http://picturesofmath.blogspot.com/2011/12/inverse-julia-set-calculation-for-z-c-z.html"],
["sextic.png", "http://picturesofmath.blogspot.com/2011/12/following-sextic-was-found-by-w.html"],
["rootsofunity.png", "http://picturesofmath.blogspot.com/2012/01/close-up-of-4-of-hundredth-roots-of.html"],
["quaternion.png", "http://picturesofmath.blogspot.com/2011/12/quaternion-julia-fractals.html"],
["lorenz.png", "http://picturesofmath.blogspot.com/2011/08/lorentz-attractor-by-nathan-selikoff.html"],
["gaussianint.png", "http://picturesofmath.blogspot.com/2011/03/this-image-by-stephen-schiller-has-been.html"],
["piproof.png", "http://picturesofmath.blogspot.com/2011/04/kurschaks-dodecagon-visual-proof-by.html"],
["kleindiagram.png", "http://picturesofmath.blogspot.com/2011/04/httpwww_10.html"],
["closedcurve.png", "http://picturesofmath.blogspot.com/2011/04/closed-meander-of-order-120-closed.html"],
["spidron.png", "http://picturesofmath.blogspot.com/2011/04/polyhedron-constructed-by-folding-along.html"],
["complexplot.png", "http://picturesofmath.blogspot.com/2011/04/plot-of-complex-valued-function-z-2z1-2.html"],
["strangeattractor.png", "http://picturesofmath.blogspot.com/2011/04/httpwww.html"],
["impossiblegeometry.png", "http://picturesofmath.blogspot.com/2011/04/blog-post_1542.html"],
["mobiusobj.png", "http://picturesofmath.blogspot.com/2011/03/mobius-like-object-with-holes-by-tom.html"],
["3dmand.jpg", "http://picturesofmath.blogspot.com/2011/03/beautiful-spot-in-3-d-mandelbrot-set.html"],
["conchoid5Hypocycloid.png", "http://picturesofmath.blogspot.com/2011/03/conchoids-of-5-cusped-epicycloid-with.html"],
["overlappingcubes.png", "http://picturesofmath.blogspot.com/2011/03/cube-6-compound-shows-6-overlapping.html"],
["5cubesurface.png", "http://picturesofmath.blogspot.com/2011/02/clebsch-diagonal-cubic-surface-is-given.html"],
["demaine.png", "http://picturesofmath.blogspot.com/2010/11/these-beautiful-origami-pieces-were.html"],
["discreteexpmap.gif", "http://picturesofmath.blogspot.com/2010/11/map-infinite-checkerboard-to-plane-so.html"],
["gameoflife.png", "http://picturesofmath.blogspot.com/2012/01/one-dimensional-totalistic-cellular.html"],
["newton.jpg", "http://picturesofmath.blogspot.com/2013/03/this-image-is-produced-by-applying.html"],
["algart.jpg", "http://picturesofmath.blogspot.com/2012/11/blog-post_30.html"],
["icosahedron.png", "http://picturesofmath.blogspot.com/2011/07/icosahedron-by-richard-sweeney.html"],
["mobius.png", "http://picturesofmath.blogspot.com/2011/04/blog-post_930.html"],
["quasicrystal.jpg", "http://picturesofmath.blogspot.com/2011/02/this-image-depicts-interaction-of-nine.html"],
["multmod.png", "http://picturesofmath.blogspot.com/2015/02/blog-post_88.html"],
["mandelbulb.png", "http://picturesofmath.blogspot.com/2012/01/mandelbulb.html"],
["automata.png", "http://picturesofmath.blogspot.com/2011/12/this-image-was-created-by-jonathan.html"],
["automataGOL.png", "http://picturesofmath.blogspot.com/2011/12/john-conways-game-of-life-is-cellular.html"],
["3djulia.png", "http://picturesofmath.blogspot.com/2011/11/three-dimensional-rendering-of-julia.html"],
["equalareas.png", "http://picturesofmath.blogspot.com/2011/08/equal-areas-by-susan-mcburney.html"],
["kleinj.jpg", "http://picturesofmath.blogspot.com/2011/04/kleins-j-invariant-in-complex-plane.html"],
["circlepacking.png", "http://picturesofmath.blogspot.com/2011/06/conformal-circle-packing-by-daniel.html"],
["moire2.jpg", "http://picturesofmath.blogspot.com/2011/05/moire-pattern-by-jacob-yerex.html"],
["cayleygraph.png", "http://picturesofmath.blogspot.com/2011/05/cayley-graph-of-finite-coxeter-groups.html"],
["circlepackings.jpg", "http://picturesofmath.blogspot.com/2011/03/circle-packings.html"],
["7dhypercube.png", "http://picturesofmath.blogspot.com/2010/11/many-people-are-familiar-with-what-3-d.html"],
["algnumbers.png", "http://picturesofmath.blogspot.com/2010/09/visualisation-of-countable-field-of.html"],
["ordinals.png", "http://picturesofmath.blogspot.com/2010/09/ordinals.html"],
["irreduciblefractions.gif", "http://picturesofmath.blogspot.com/2010/11/wow-irreducible-fractions-come-up-all.html"],
["appoloniangasket.png", "http://picturesofmath.blogspot.com/2011/03/apollonian-gasket.html"],
["underwatercropcircles.png", "http://picturesofmath.blogspot.com/2012/09/these-underwater-crop-circles-were.html"],
["algarttworules.png", "http://picturesofmath.blogspot.com/2012/01/this-image-is-result-of-two-rules.html"],
["epicycloid2ncusps.gif", "http://picturesofmath.blogspot.com/"],
["quasicrystal.gif", "http://picturesofmath.blogspot.com/"],
["recursion.gif", "http://picturesofmath.blogspot.com/"],
["galaxymagfieldplanck.jpg", "http://picturesofmath.blogspot.com/"],
["primesin1000.png", "http://picturesofmath.blogspot.com/"],
["csharp.gif", "http://picturesofmath.blogspot.com/"],
["projection.jpg", "http://picturesofmath.blogspot.com/"],
["vortexstreets.png", "http://picturesofmath.blogspot.com/"]];

function getSixRandomImages(imgAr, path) {
    // path = path || 'images/'; // default path here
    path = 'mathpics/';
    var num = 0;
    num = Math.floor( Math.random() * imgAr.length );
    var numArray = [num];
    var imgStrArray = [];
    var imgStr = '';
    for(var i = 1; i<6; i++){
    	num = Math.floor( Math.random() * imgAr.length );
    	var j = 0;
    	while(j < i){
    		if(numArray[j]!=num){
    			j++;
    		}
    		else{
    			num = Math.floor( Math.random() * imgAr.length );
    			j = 0;
    		}
    	}
    	numArray.push(num); 
	}
    console.log('numArray= ' + numArray);
	for(var i = 0; i<6; i++){
		// console.log('num is: ' + numArray[i]);	
		var img = imgAr[ numArray[i] ][0];
	    var url = imgAr[ numArray[i] ][1];
	    imgStr = '<a class="thumbnail" href = "' + url + '"><img border="0" src="' + path + img + '" class="img-responsive" alt = ""></a>';
	    imgStrArray.push(imgStr);
	}
	console.log('imgStrArray= ' + imgStrArray);
	return imgStrArray;

	// document.write(imgStr); document.close();

}


