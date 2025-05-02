"use client";

import React, { useReducer } from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';;
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatePresence } from '@/components/atoms/motion';

type State = {
    isButtonVisible: boolean;
    isModalVisible: boolean;
};

type Action =
    | { type: 'SHOW_CHAT' }
    | { type: 'HIDE_CHAT' }
    | { type: 'SHOW_BUTTON' };

const initialState: State = {
    isButtonVisible: true,
    isModalVisible: false,
};

const modalReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SHOW_CHAT':
            return { ...state, isModalVisible: true, isButtonVisible: false };
        case 'HIDE_CHAT':
            return { ...state, isModalVisible: false };
        case 'SHOW_BUTTON':
            return { ...state, isButtonVisible: true };
        default:
            return state;
    }
};

const ChatButton = () => {
    const [state, dispatch] = useReducer(modalReducer, initialState);

    const showChat = () => {
        dispatch({ type: 'SHOW_CHAT' });
    };

    const hideChat = () => {
        dispatch({ type: 'HIDE_CHAT' });
        setTimeout(() => dispatch({ type: 'SHOW_BUTTON' }), 500)
    };

    return (
        <div className='fixed bottom-5 right-5 z-50'>
            {state.isButtonVisible &&
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}>
                    <Button onClick={showChat}>
                        <ChatBubbleIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    </Button>
                </motion.div>}
            <AnimatePresence initial={state.isModalVisible}>
                {state.isModalVisible ? <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className='bg-white p-8 rounded shadow-sm'
                    onClick={hideChat}>
                    <h3>Chat Room</h3>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Login</CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </motion.div> : null}
            </AnimatePresence>
        </div>
    );
};

export default ChatButton;
