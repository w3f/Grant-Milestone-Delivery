
# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/slothunter.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
|    0a. | License             |<ul><li>[x] </li></ul>| GPLv3| |
|    0b. | Documentation       |<ul><li>[x] </li></ul>| See each project's README.| |
|    0c. | Testing guide       |<ul><li>[x] </li></ul>| See below.| |
|     1. | Telegram bot        |<ul><li>[x] </li></ul>| https://github.com/hack-ink/telegram-webhook.| |
|     2. | Workshop repository |<ul><li>[x] </li></ul>| https://github.com/hack-ink/slothunter/blob/main/example/webhook/guide.md.| |

## Evaluation V1

### Documentation

I didn't have problems configuring the Telegram bot and Slack. The documentation is good. I only suggest adding in the [README](https://github.com/hack-ink/slothunter/blob/main/README.md) the instructions to get the command `slothunter`, in my case, I built, using `cargo build --release` and added the path to `slothunter` to my `.bashrc`

### Manual Test

I was able to receive the auction notification in Telegram and in Slack.

Telegram

![pasted image 0 (12)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/c9f8f19f-1db8-4384-8a23-490677db6d41)


Slack

![pasted image 0 (13)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/af263888-1fa3-4b11-bbd5-b94122b6ba84)

### Code Quality

I ran `cargo clippy` in both repositories and didn't receive warnings.
