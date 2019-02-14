import * as React from 'react';

const UserContext = React.createContext<{
	user?: string;
}>({});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;