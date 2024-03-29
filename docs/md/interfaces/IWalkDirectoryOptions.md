[@bemoje/node-util](/docs/md/index.md) / IWalkDirectoryOptions

# Interface: IWalkDirectoryOptions

## Hierarchy

- `Omit`<`WalkOptions`, ``"filter"`` \| ``"no_return"``\>

  ↳ **`IWalkDirectoryOptions`**

## Table of contents

### Properties

- [filter](/docs/md/interfaces/IWalkDirectoryOptions.md#filter)
- [find\_links](/docs/md/interfaces/IWalkDirectoryOptions.md#find_links)
- [follow\_symlinks](/docs/md/interfaces/IWalkDirectoryOptions.md#follow_symlinks)
- [fs](/docs/md/interfaces/IWalkDirectoryOptions.md#fs)
- [max\_depth](/docs/md/interfaces/IWalkDirectoryOptions.md#max_depth)
- [no\_recurse](/docs/md/interfaces/IWalkDirectoryOptions.md#no_recurse)
- [return\_object](/docs/md/interfaces/IWalkDirectoryOptions.md#return_object)
- [sync](/docs/md/interfaces/IWalkDirectoryOptions.md#sync)
- [track\_inodes](/docs/md/interfaces/IWalkDirectoryOptions.md#track_inodes)

## Properties

### filter

• `Optional` **filter**: (`fullpath`: `string`, `stat`: `Stats`) => `boolean`

#### Type declaration

▸ (`fullpath`, `stat`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fullpath` | `string` |
| `stat` | `Stats` |

##### Returns

`boolean`

#### Defined in

[src/filesystem/walk/types/IWalkDirectoryOptions.ts:5](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/filesystem/walk/types/IWalkDirectoryOptions.ts#L5)

___

### find\_links

• `Optional` **find\_links**: `boolean`

default True. if false this will use stat insteqad of lstat and not find links at all.

#### Inherited from

Omit.find\_links

#### Defined in

node_modules/walkdir/walkdir.d.ts:82

___

### follow\_symlinks

• `Optional` **follow\_symlinks**: `boolean`

follow symlinks. default FALSE

#### Inherited from

Omit.follow\_symlinks

#### Defined in

node_modules/walkdir/walkdir.d.ts:45

___

### fs

• `Optional` **fs**: `any`

provide an alternate implementation of fs like graceful-fs

#### Inherited from

Omit.fs

#### Defined in

node_modules/walkdir/walkdir.d.ts:78

___

### max\_depth

• `Optional` **max\_depth**: `number`

only travel to max depth. emits an error if hit.

#### Inherited from

Omit.max\_depth

#### Defined in

node_modules/walkdir/walkdir.d.ts:53

___

### no\_recurse

• `Optional` **no\_recurse**: `boolean`

only go one level deep. convenience param.

#### Inherited from

Omit.no\_recurse

#### Defined in

node_modules/walkdir/walkdir.d.ts:49

___

### return\_object

• `Optional` **return\_object**: `boolean`

return an object of {path:stat} instead of just the resolved path names

#### Inherited from

Omit.return\_object

#### Defined in

node_modules/walkdir/walkdir.d.ts:66

___

### sync

• `Optional` **sync**: `boolean`

make this syncronous. the same as calling walkdir.sync

#### Inherited from

Omit.sync

#### Defined in

node_modules/walkdir/walkdir.d.ts:62

___

### track\_inodes

• `Optional` **track\_inodes**: `boolean`

on filesystems where inodes are not unique like windows (or perhaps hardlinks) some files may not be emitted due to inode collision.
turning off this behavior may be required but at the same time may lead to hitting max_depth via link loop.

#### Inherited from

Omit.track\_inodes

#### Defined in

node_modules/walkdir/walkdir.d.ts:58
