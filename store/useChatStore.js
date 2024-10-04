// import { defineStore } from 'pinia'
//
// export const useChatStore = defineStore('chat', {
//     state: () => ({
//         models: ['GPT-3', 'GPT-4'],
//         prompts: ['Prompt 1', 'Prompt 2'],
//         knowledgeBases: ['KB 1', 'KB 2'],
//         messages: [],
//         currentView: 'chat', // Can be 'newChat' or 'historyChat'
//         selectedChat: null,  // To track the selected historical chat
//         historyChats: [
//             { title: 'Chat 1', content: 'This is Chat 1 history.' },
//             { title: 'Chat 2', content: 'This is Chat 2 history.' },
//         ],
//     }),
//     actions: {
//         // Action to start a new chat
//         startNewChat() {
//             this.currentView = 'newChat'
//             this.selectedChat = null
//         },
//         // Action to show history chat
//         showHistoryChat(chat) {
//             this.currentView = 'historyChat'
//             this.selectedChat = chat
//         },
//         addMessage(role, content) {
//             this.messages.push({ role, content })
//         }
//     }
// })

//正确版
import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
    state: () => ({
        models: ['GPT-3', 'GPT-4'],
        prompts: ['Prompt 1', 'Prompt 2'],
        knowledgeBases: ['KB 1', 'KB 2'],
        messages: [],
        historyChats: [{ title: 'Chat   ``11111' }, { title: 'Chat 222222222' }],
        selectedModel: 'GPT-3',
        selectedPrompt: 'Prompt 1',
        selectedKnowledgeBase: 'KB 1',
        isMobile: false,
        sidebarVisible: true,
    }),
    actions: {
        newChat() {
            this.messages = []
        },
        selectChat(chat) {
            // Load chat history logic
        },
        sendMessage(content) {
            this.messages.push({ role: 'user', content })
            // Simulate AI response
            setTimeout(() => {
                this.messages.push({ role: 'ai', content: 'AI response' })
            }, 1000)
        },
        openSettings() {
            // Logic to open settings modal
        },
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible
        },
    },
})
