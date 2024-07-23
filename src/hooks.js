// hooks.js
import { useSelector, useDispatch } from 'react-redux';
import { store } from './store';

/**
 * @typedef {import('./store').RootState} RootState
 * @typedef {import('./store').AppDispatch} AppDispatch
 */

/** @type {import('react-redux').TypedUseSelectorHook<RootState>} */
export const useAppSelector = useSelector;

/** @returns {AppDispatch} */
export const useAppDispatch = () => useDispatch();
