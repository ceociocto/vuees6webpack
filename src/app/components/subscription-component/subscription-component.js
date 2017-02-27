import Vue from 'vue';
import template from './subscription-component-template.html';

const SubscriptionComponent = Vue.extend({
	template,
	props: [
		'channel',
		'pusher'
	],
	data() {
		return {
			tweets: []
		}
	},
	methods: {
		subscribeToChannel() {
			this.pusherChannel = this.pusher.subscribe(btoa(this.channel.term));
			this.pusherChannel.bind('new_tweet', (data) => {
				this.newTweet(data);
			});
			this.subscribe = true;
		},
		newTweet(data) {
			this.tweets.push(data);
			this.$nextTick(() => {
				const listItem = document.querySelector(`.channel-${this.channel.term}`);
				listItem.scrollTop = listItem.scrollHeight;
			})
		},
		unsubscribe() {
			this.pusherChannel.unsubscribe(btoa(this.channel.term));
			this.pusherChannel && this.pusherChannel.unbind();
			this.subscribed = false;
		}
	},
	created() {
		this.subscribeToChannel()
	},
	beforeDestroy() {
		this.unsubscribe();
	},
	watch: {
		'channel.active': function() {
			if (!this.channel.active && this.subscribed) {
				this.unsubscribe();
			} else if (this.channel.active && !this.subscribed) {
				this.subscribeToChannel();
			}
		}
	}
})

export default SubscriptionComponent;