# Mongo Commands

## Start `mongod`

```bash
sudo systemctl start mongod
```

If you receive an error like "Failed to start mongod.service: Unit mongod.service not found."

```bash
sudo systemctl daemon-reload
```

## Verify `mongod` Started

```bash
sudo systemctl status mongod
```

## Have `mongod` Start After Reboot

```bash
sudo systemctl enable mongod
```

## Stop `mongod`

```bash
sudo systemctl stop mongod
```

## Restart `mongod`

```bash
sudo systemctl restart mongod
```

## Run `mongosh` (Mongo Shell)

```bash
mongosh
```
