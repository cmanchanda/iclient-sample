function addTrialToken(tokenContents) {
    const tokenElement = document.createElement('meta');
    tokenElement.httpEquiv = 'origin-trial';
    tokenElement.content = tokenContents;
    document.head.appendChild(tokenElement);
}