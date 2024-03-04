# Evaluation


- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PoCS.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All evaluations by PieWol


**Milestone 2**
| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
|0a.|License| <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/auguth/pocs/blob/master/LICENSE) | - |
|0b.|Documentation| <ul><li>[x] </li></ul> | [Pallet Contracts](https://auguth.github.io/pocs/target/doc/pallet_contracts/) , [Pallet Staking](https://auguth.github.io/pocs/target/doc/pallet_staking/) | okay |
|0c.|Testing Guide | <ul><li>[x] </li></ul> | [Testing guide](https://github.com/auguth/pocs/blob/master/TESTING-GUIDE.md) | nice, changes were good. |
|0d.|Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/auguth/pocs/blob/master/Dockerfile) , [Docker Compose](https://github.com/auguth/pocs/blob/master/docker-compose.yml) , [DockerImage Pull](https://github.com/auguth/pocs/blob/master/README.md#docker-pull)| docker works |
|0e.| Article | <ul><li>[ ] </li></ul> | [Article (Draft)](https://github.com/auguth/pocs/blob/master/ARTICLE.md)|Good start. The article should be about changes just for this milestone and separately published. It's a delivery of M2. Just keep it in scope and concise. |
|1.| Modify pallet staking for PoCS |<ul><li>[ ] </li></ul> | [PoCS x NPoS (Milestone 2 - Core) PR#29](https://github.com/auguth/pocs/pull/29)| |

## General Notes

## Min Bond
I think what you did here is a major problem for the NPoS algorithm. The min bond is vital to ensure a reasonable runtime of the algorithm. Otherwise it might not finish within the given blocktime. This is a major issue and you should think of a solution.

I'm referring to 
```
			if value < T::Currency::minimum_balance() {
				return Err(Error::<T>::InsufficientBond.into())
			}
			// if value < T::Currency::minimum_balance() {
			// 	return Err(Error::<T>::InsufficientBond.into())
			// }
```
which are changes you made in `pallets/staking/src/pallet/mod.rs`

Looking forward to your comments or a solution on this.

## Testing Guide
nice updates. Looks good now. I think even the commit history can safely be removed from this. The rest it good the way it is.

## Article deliverable
Please stick to the agreed upon deliverables and publish an actual article even for this milestone. 
With the amount of content you included in your draft I don't see it making a lot of sense to wait for M3 results to write an even larger article. The article should be a concise presentation and explanation of your concept and accomplishments for this milestone only. I doubt many readers will make the effort to read such a detailed long article. No offense to you and I appreciate the work you put into it. 

A short summary of previous change could make sense in article for m3 to give readers an impression of your work with just one article.

