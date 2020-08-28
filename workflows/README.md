# Workflows for IDM chess

- chess_worflow: This is one that you should use. This implements the chess game using user tasks of the workflow.
- game_invitation_wokflow: This one was the first incarnation, and the workflow is only used for inviting users to play. The gameplay was implemented in the end-user-ui's dashboard widget. This is obsolete.

## How to deploy

```
# go to the correct workflow directory
cd forgerock-idm-chess/workflows/chess_workflow

# create the BAR file
jar cvf chess.bar *.bpmn20.xml *.js

# deploy the BAR file (assuming the workflows are read from the 'workflow' subdirectory.
cp chess.bar <path/to/openidm-server>/workflow
```
