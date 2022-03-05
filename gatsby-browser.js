import { useEffect, useState } from 'react';
import { App } from './src/app';

export const wrapRootElement = ({ element }) => <App>{element}</App>;
