# Custom Hook
Custom hook is a function like javascript functions. What is distinguish custom hook function is it's name. It's name always start with use to let us know that this function follows the the rules of hook.

## Example
    const useDocumentTitle = (title) => {
      useEffect(() => {
        document.title = title;
      }, [title])
    }

As you can see in the example the custom hook is just for organizing our code and inside the function we used the core of custom hook which is setState. In the example of custom Hook, we pass a piece of text into and the Hook updates the document title for us.
