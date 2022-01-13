import validUrl from "valid-url"

export const formatImageUrl = (url: string, maybeValidUrl: string) => {
    if (!maybeValidUrl) {
      return null;
    }
  
    if (validUrl.isUri(maybeValidUrl)) {
      return maybeValidUrl;
    }
  
    // get origin from url
    var pathArray = url.split("/");
    var protocol = pathArray[0];
    var host = pathArray[2];
    var urlOrigin = protocol + "//" + host;
  
    // combine origin with path
    return new URL(maybeValidUrl, urlOrigin).href
  };