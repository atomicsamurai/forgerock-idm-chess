/*
 * Copyright 2013-2017 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */

 /*
 query parameters-
    searchtext: substring to search usernames for 
 
 This will only return users which are:
   - not the active user
   - have opted in for games
   - not already invited by calling user
   - not already playing a game with calling user
 */
(function(){
  var myid = context.parent.parent.parent.authorization.authenticationId;
  var queryFilter = {
    _queryFilter: "/preferences/games eq true and ! /userName eq '" +
      myid + 
      "' and userName co '" +
      request.additionalParameters.searchtext + 
      "' or /preferences/games eq true and ! /userName eq '" +
      myid + 
      "' and givenName co '" +
      request.additionalParameters.searchtext + 
      "' or /preferences/games eq true and ! /userName eq '" +
      myid + 
      "' and sn co '" +
      request.additionalParameters.searchtext + 
      "'"
  };
  var result = openidm.query("managed/user", queryFilter, ["_id", "userName", "givenName", "sn"]);
  //console.log(result);
  return result;
})();

