// Package models contains the types for schema 'getskytrade'.
package models

// Code generated by xo. DO NOT EDIT.

import (
	"errors"
)

// SchemaMigration represents a row from 'getskytrade.schema_migrations'.
type SchemaMigration struct {
	Version int64 `json:"version"` // version
	Dirty   bool  `json:"dirty"`   // dirty

	// xo fields
	_exists, _deleted bool
}

// Exists determines if the SchemaMigration exists in the database.
func (sm *SchemaMigration) Exists() bool {
	return sm._exists
}

// Deleted provides information if the SchemaMigration has been deleted from the database.
func (sm *SchemaMigration) Deleted() bool {
	return sm._deleted
}

// Insert inserts the SchemaMigration to the database.
func (sm *SchemaMigration) Insert(db XODB) error {
	var err error

	// if already exist, bail
	if sm._exists {
		return errors.New("insert failed: already exists")
	}

	// sql insert query, primary key must be provided
	const sqlstr = `INSERT INTO getskytrade.schema_migrations (` +
		`version, dirty` +
		`) VALUES (` +
		`?, ?` +
		`)`

	// run query
	XOLog(sqlstr, sm.Version, sm.Dirty)
	_, err = db.Exec(sqlstr, sm.Version, sm.Dirty)
	if err != nil {
		return err
	}

	// set existence
	sm._exists = true

	return nil
}

// Update updates the SchemaMigration in the database.
func (sm *SchemaMigration) Update(db XODB) error {
	var err error

	// if doesn't exist, bail
	if !sm._exists {
		return errors.New("update failed: does not exist")
	}

	// if deleted, bail
	if sm._deleted {
		return errors.New("update failed: marked for deletion")
	}

	// sql query
	const sqlstr = `UPDATE getskytrade.schema_migrations SET ` +
		`dirty = ?` +
		` WHERE version = ?`

	// run query
	XOLog(sqlstr, sm.Dirty, sm.Version)
	_, err = db.Exec(sqlstr, sm.Dirty, sm.Version)
	return err
}

// Save saves the SchemaMigration to the database.
func (sm *SchemaMigration) Save(db XODB) error {
	if sm.Exists() {
		return sm.Update(db)
	}

	return sm.Insert(db)
}

// Delete deletes the SchemaMigration from the database.
func (sm *SchemaMigration) Delete(db XODB) error {
	var err error

	// if doesn't exist, bail
	if !sm._exists {
		return nil
	}

	// if deleted, bail
	if sm._deleted {
		return nil
	}

	// sql query
	const sqlstr = `DELETE FROM getskytrade.schema_migrations WHERE version = ?`

	// run query
	XOLog(sqlstr, sm.Version)
	_, err = db.Exec(sqlstr, sm.Version)
	if err != nil {
		return err
	}

	// set deleted
	sm._deleted = true

	return nil
}

// SchemaMigrationByVersion retrieves a row from 'getskytrade.schema_migrations' as a SchemaMigration.
//
// Generated from index 'schema_migrations_version_pkey'.
func SchemaMigrationByVersion(db XODB, version int64) (*SchemaMigration, error) {
	var err error

	// sql query
	const sqlstr = `SELECT ` +
		`version, dirty ` +
		`FROM getskytrade.schema_migrations ` +
		`WHERE version = ?`

	// run query
	XOLog(sqlstr, version)
	sm := SchemaMigration{
		_exists: true,
	}

	err = db.QueryRow(sqlstr, version).Scan(&sm.Version, &sm.Dirty)
	if err != nil {
		return nil, err
	}

	return &sm, nil
}
