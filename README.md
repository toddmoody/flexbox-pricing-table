## App Name 

MyMango - Flexbox / JS pricing table rebuild 

##### Synopsis / Summary 

I initially developed a pricing table for existing client http://mymango.net/ using a traditional CSS grid & floats (due to their internal use of legacy web browsers). I really found this restricting in terms of achieving the layout and ultimately the end result I wanted. Given, this I decided to ditch the floats and rebuild the pricing table using more modern front-end technologies incl. CSS flexbox and SASS.

Additionally, I thought a good enhancement to present to the client would be a toggle to enable the user to switch between monthly and annual pricing (at a discounted rate). So essentially I set out to rebuild the pricing table to just over an MVP level (it's known that this version would require additional iteration before going into a production environment).

###### Staging URL

https://toddmoody.github.io/flexbox-pricing-table/

###### Key deliverables

- UI/UX Design
- Front-End development 
- Integration of annual / monthly pricing toggle
- Deployment & Hosting

###### Technology 

- Sketch / Photoshop (UI/UX)
- HTML
- SASS incl. Flexbox
- SVG's
- JavaScript / ES6
- Babel
- Webpack

###### More on technical process

As mentioned above, I undertook this as a bit of a side project due to becoming frustrated with legacy browser limitations. Given this, it was a 'relatively' greenfields opportunity to get a little bit creative, in particular with the colour pallette (although I do plan to use this as a selling tool with the client so I didn't want to get too crazy).

This was predominately a markup and styling job and I really enjoyed using flex containers to handle the responsive side in combination with SASS. To me, flexbox feels like a huge improvement for positioning elements over the traditional methods and it just ends up being much more maintainable code (albeit flex support isn't quite 100%).

I also wanted to drop in a touch of JS in order to handle the pricing toggle between monthly and annual. I've seen this around a little bit and I think it's a nice touch.

###### Ideas for enhancement 

- [x] Add a toggle to switch between annual and monthly pricing using vanilla JS.
- [x] Integrate Webpack to package and minify files.
- [] Potentially integrate modal windows / tooltips to provide additional information re each level of service on mouseover.
- [] Add some additional info i.e. FAQ's.





