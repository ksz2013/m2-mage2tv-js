### Developer mode summary:

* PHP stack traces are shown in the browser
* XML files are validated againts their schemes
* Static assets are created on the fly
* X-Magento-* debug headers are added to responses
* Debug logging can be enabled
* Static asset minification and bundling not applied

 
 &nbsp;  
   
 
### Production mode summary:

* Static assets are not created on the fly (unless configured static_content_on_demand_in_production => 1 )
* PHP Stack traces are hidden
* XML files with errors are silently ignored
* Caching can not be disabled in the admin
* Debug loggin is always disabled
* Developer section of Stores -> COnfiguration -> Advanced is hidden


