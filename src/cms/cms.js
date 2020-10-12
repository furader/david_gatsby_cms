import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import Section1Preview from  './preview-templates/Section1Preview'
import Section2Preview from  './preview-templates/Section2Preview'
import Section3Preview from  './preview-templates/Section3Preview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('section1', Section1Preview)
CMS.registerPreviewTemplate('section2', Section2Preview)
CMS.registerPreviewTemplate('section3', Section3Preview)
   
