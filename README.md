# Flexbox pricing table

Synopsis / Summary
I initially developed a pricing table for existing client http://mymango.net/ using a traditional CSS grid & floats due to their internal use of legacy browsers. Out of interest I decided to redesign & rebuild the table using CSS Flexbox and using a mobile first approach.

### Staging URL
https://toddmoody.github.io/flexbox-pricing-table/

### Key functionality
Mobile responsible display of pricing table featuring 4 key service levels.
A single column needed to be dialed up as the 'feature product'
Screenshots
Main view of app on desktop:

### Technology
- HTML
- CSS Flexbox
- JS (to be applied see below re toggle)

### Task list
 [] Add a toggle to swtich between annual and monthly pricing using vanilla JS.
 [] Potentially integrate modal windows / tooltips to provide additional information re each level of service on mouseover.
 [] Integrate Webpack to package and minify files.
 [] Add a header to feature the trial details and possibly flesh out further with FAQ's.

### Recently completed updates
 [x] Integrate to webpack and update CSS to SCSS.
 [x] Additional stying to the column headers.
 [x] Additional styling to the featured column.
 [x] Refine use of dropshadows for the columns and mouse over states.

 ### NPM commands

- npm install
- npm run dev
- npm run build
